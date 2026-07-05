const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  console.log(`${req.method} ${req.url}`);

  if (req.method === 'POST') {
    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      body = Buffer.concat(body);

      if (req.url === '/upload-proxy') {
        try {
          const json = JSON.parse(body.toString());
          const base64Data = json.image.replace(/^data:image\/\w+;base64,/, '');
          const imageBuffer = Buffer.from(base64Data, 'base64');

          const uploadsDir = path.join(__dirname, 'uploads');
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir);
          }

          const filename = `slide_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.png`;
          const filepath = path.join(uploadsDir, filename);

          fs.writeFile(filepath, imageBuffer, (err) => {
            if (err) {
              console.error('Local save error:', err);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            } else {
              const host = req.headers.host || `localhost:${PORT}`;
              const protocol = host.includes('localhost') ? 'http' : 'https';
              const publicUrl = `${protocol}://${host}/uploads/${filename}`;
              
              console.log(`Saved locally: ${filepath}`);
              console.log(`Public URL: ${publicUrl}`);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ url: publicUrl }));
            }
          });
        } catch (e) {
          console.error('Parse error /upload-proxy:', e);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: e.message }));
        }
      } else if (req.url === '/buffer-proxy') {
        try {
          const json = JSON.parse(body.toString());
          const token = json.token;
          const gqlQuery = JSON.stringify({ query: json.query });

          const reqOpts = {
            hostname: 'api.buffer.com',
            path: '/',
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(gqlQuery)
            }
          };

          const bufferReq = https.request(reqOpts, (bufferRes) => {
            let data = '';
            bufferRes.on('data', chunk => data += chunk);
            bufferRes.on('end', () => {
              res.writeHead(bufferRes.statusCode, { 'Content-Type': 'application/json' });
              res.end(data);
            });
          });

          bufferReq.on('error', (err) => {
            console.error('Buffer request error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          });

          bufferReq.write(gqlQuery);
          bufferReq.end();
        } catch (e) {
          console.error('Parse error /buffer-proxy:', e);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: e.message }));
        }
      } else {
        res.writeHead(404);
        res.end();
      }
    });
    return;
  }

  // Handle static files
  let filePath = req.url === '/' 
    ? path.join(__dirname, 'index.html')
    : path.join(__dirname, req.url.split('?')[0]);
    
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
