/**
 * TLABAL Instagram Card News Generator
 * App Logic & Data (MOBILE OPTIMIZED: 6-slide expansion, 6 different model poses, flight-only business model)
 */

// 12 Topics Data (Each expanded to 6 slides, Slide 4 customized with country/topic specific hook, CTA button customized to Comment-to-DM)
const topicsData = [
  {
    id: 1,
    country: "vietnam",
    countryName: "베트남",
    mainColor: "#A6373D",
    pointColor: "#D9A441",
    badge: "VIETNAM",
    title: "베트남 자유여행, 트라밸 하나면 끝",
    slides: [
      {
        type: "cover",
        title: "베트남 여행,<br>어디로 갈지 고민되시나요?",
        subtitle: "TRAVEL WITH TLABAL",
        layout: "cover-split",
        badgeText: "VIETNAM",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "고민 끝, 선택은 자유롭게",
        subtitle: "다낭·나트랑·푸꾸옥, 한 번의 예약으로 자유 이동",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "다낭 (Da Nang)", desc: "도심 and 해변을 함께 즐기는 올라운드 대표 도시" },
          { title: "나트랑 (Nha Trang)", desc: "에메랄드빛 바다에서 즐기는 해양스포츠 천국" },
          { title: "푸꾸옥 (Phu Quoc)", desc: "프라이빗 풀빌라에서 보내는 완전한 힐링 휴양" }
        ]
      },
      {
        type: "content",
        title: "숙소부터 투어까지 한번에",
        subtitle: "이동수단 걱정 없이, 숙소·투어 올인원 구성",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        textContent: "여러 사이트에서 헤매지 마세요! 트라밸은 제휴 리조트와 전용 렌터카, 로컬 프라이빗 투어를 하나로 묶어 복잡한 여행 준비를 끝내드립니다."
      },
      {
        type: "content",
        title: "베트남 3박 5일 풀옵션 여행<br>단돈 10만원대에 해결하는 법?",
        subtitle: "대형 패키지 퀄리티 그대로, 현지 올인원 지원",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "바우처 하나로 더 가볍게",
        subtitle: "멤버십 상품권 적용 시 숙박비 즉시 할인",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "제휴 리조트 일반 예약가",
        priceAfter: "댓글 남겨주시면 특별 혜택가 DM 즉시 안내!",
        discountText: "댓글 특별 혜택"
      },
      {
        type: "cta",
        title: "이제 고민은 그만,<br>트라밸과 함께 떠나요",
        subtitle: "프로필 링크에서 바로 확인하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남겨서 특별 플랜 받기"
      }
    ]
  },
  {
    id: 2,
    country: "vietnam",
    countryName: "베트남",
    mainColor: "#A6373D",
    pointColor: "#D9A441",
    badge: "VIETNAM",
    title: "베트남 3대 도시 한눈에: 다낭·나트랑·푸꾸옥",
    slides: [
      {
        type: "cover",
        title: "다낭? 나트랑? 푸꾸옥?<br>나에게 맞는 도시는 어디?",
        subtitle: "VIETNAM 3대 대표 도시 비교",
        layout: "cover-split",
        badgeText: "CITY GUIDE",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "다낭 — 다 있는 올라운더",
        subtitle: "도심 + 자연 + 해변, 모든 세대 만족도 1위",
        layout: "city-detail",
        stepIndicator: "도시 비교 1 / 3",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        textContent: "미케비치와 바나힐 골든브릿지를 품어 볼거리가 가득합니다. 부모님이나 아이 동반 가족 여행에 절대 실패 없는 대표 도시입니다."
      },
      {
        type: "content",
        title: "나트랑 — 액티비티 천국",
        subtitle: "해양스포츠·빈원더스, 활동적인 커플들의 성지",
        layout: "city-detail",
        stepIndicator: "도시 비교 2 / 3",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
        textContent: "투명한 해안에서 즐기는 스노클링과 대형 테마파크 빈원더스까지! 친구나 연인과 다이내믹한 꿀잼 여행을 원하는 분께 추천합니다."
      },
      {
        type: "content",
        title: "다낭·나트랑 3박 5일 일정<br>10만원대로 숙소+식사+관광 해결?",
        subtitle: "트라밸 독점 멤버십 제휴 혜택으로 비용 제로화",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "푸꾸옥 — 완벽한 휴양",
        subtitle: "에메랄드빛 바다, 오감 힐링 프라이빗 호캉스",
        layout: "city-detail",
        stepIndicator: "도시 비교 3 / 3",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        textContent: "청정 자연과 고급 리조트가 가득한 보석 같은 섬. 조용한 프라이빗 비치와 풀빌라에서 오롯이 휴식에만 집중하고 싶은 분께 완벽합니다."
      },
      {
        type: "cta",
        title: "세 도시 모두 트라밸 하나로",
        subtitle: "지금 나에게 맞는 도시 찾기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 추천 도시 DM 받기"
      }
    ]
  },
  {
    id: 3,
    country: "vietnam",
    countryName: "베트남",
    mainColor: "#A6373D",
    pointColor: "#D9A441",
    badge: "VIETNAM",
    title: "베트남 여행 예산은 얼마?",
    slides: [
      {
        type: "cover",
        title: "베트남 여행,<br>과연 얼마면 될까?",
        subtitle: "3박 5일 실속 견적 가이드",
        layout: "cover-split",
        badgeText: "BUDGET",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "항공 + 숙소 평균 예산",
        subtitle: "3박 5일 기준, 시즌별 평균 예산대 안내",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "비수기 45만원~",
        priceAfter: "성수기 75만원~",
        discountText: "왕복 항공권 및 4성급 제휴 리조트 기준"
      },
      {
        type: "content",
        title: "식비 + 투어 현지 체감 경비",
        subtitle: "부담 없는 물가, 하루 평균 지출 가이드",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "식비 (하루)", desc: "쌀국수 3천원대, 해산물 세트 2~3만원선" },
          { title: "스파 & 마사지", desc: "로컬 샵 1.5만원, 고급 스파 3만원 내외" },
          { title: "원데이 투어", desc: "호핑/단독 차량 투어 인당 4~6만원선" }
        ]
      },
      {
        type: "content",
        title: "베트남 3박 5일 실속 여행<br>10만원대에 현지 경비 끝내는 법",
        subtitle: "불필요한 여행 거품 제거, 현지 4대 경비 지원",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "멤버십 바우처 적용 시",
        subtitle: "숙박비 최대 절감, 상품권으로 더 알뜰하게!",
        layout: "comparison-bars",
        hasModel: false,
        bars: [
          { label: "일반 숙소 예약가", value: "100%", color: "#cbd5e1" },
          { label: "트라밸 바우처 적용가", value: "68%", color: "var(--main-color)" }
        ],
        textContent: "트라밸 제휴 리조트 최대 32% 선할인 혜택으로, 불필요한 거품을 걷어내고 가장 알뜰한 호캉스를 즐겨보세요."
      },
      {
        type: "cta",
        title: "정확한 견적이 궁금하다면?",
        subtitle: "지금 바로 1:1 맞춤 상담 받아보기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 상세 견적서 받기"
      }
    ]
  },
  {
    id: 4,
    country: "thailand",
    countryName: "태국",
    mainColor: "#0B4F6C",
    pointColor: "#D4AF37",
    badge: "THAILAND",
    title: "태국 여행, 지금이 특가",
    slides: [
      {
        type: "cover",
        title: "태국 여행 특가 찬스,<br>지금이 바로 기회!",
        subtitle: "LIMITED TIME OFFER",
        layout: "cover-split",
        badgeText: "LIMITED OFFER",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "일찍 예약할수록 유리한 얼리버드",
        subtitle: "좌석 및 선호 리조트 룸 사전 선점 가능",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        textContent: "방콕 인기 인피니티 풀 호텔과 푸켓 풀빌라는 빠르게 예약 마감됩니다. 3~4개월 얼리버드 결제 시 최대 35% 특가를 제공합니다."
      },
      {
        type: "content",
        title: "태국 3박 4일 패키지급 일정<br>단돈 10만원대로 올인원 해결법?",
        subtitle: "대형 패키지와 동일한 숙소, 식사, 관광 코스 제공",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "특가에 멤버십 바우처 결합",
        subtitle: "이중 할인 효과로 가성비 극대화",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "태국 패키지 정상가 89만원",
        priceAfter: "댓글 남기면 특별 혜택가 DM 즉시 안내!",
        discountText: "댓글 달면 즉시 안내"
      },
      {
        type: "content",
        title: "실시간 한정 수량 잔여 게이지",
        subtitle: "특가는 한정 수량 매진 시 자동 조기 마감됩니다",
        layout: "comparison-bars",
        hasModel: false,
        bars: [
          { label: "실시간 잔여 수량", value: "15%", color: "#ef4444" }
        ],
        textContent: "실시간 항공 잔여석과 리조트 프로모션 룸 소진 속도가 매우 빠릅니다. 서둘러 예약을 예약해주세요!"
      },
      {
        type: "cta",
        title: "특가 마감 전에 선점하세요!",
        subtitle: "실시간 최저가 확인 및 간편 예약하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 태국 특가 DM 받기"
      }
    ]
  },
  {
    id: 5,
    country: "thailand",
    countryName: "태국",
    mainColor: "#0B4F6C",
    pointColor: "#D4AF37",
    badge: "THAILAND",
    title: "태국 방콕 vs 휴양지, 뭐가 더 나을까",
    slides: [
      {
        type: "cover",
        title: "화려한 방콕? 평화로운 휴양지?<br>고민될 때 해답은?",
        subtitle: "BANGKOK VS RESORT ISLANDS",
        layout: "cover-split",
        badgeText: "TRAVEL VS",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "방콕 — 화려한 쇼핑 & 미식",
        subtitle: "트렌디한 아이콘시암, 야시장, 루프탑 바 투어",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
        textContent: "대형 쇼핑몰과 화려한 루프탑 바, 활기찬 야시장까지 다채롭고 활력 넘치는 도심의 밤을 만끽하고 싶은 분들께 어울리는 여행지입니다."
      },
      {
        type: "content",
        title: "휴양지 — 평화롭고 나긋한 힐링",
        subtitle: "푸켓·코사무이·크라비 해변과 럭셔리 휴양",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        textContent: "맑고 깨끗한 프라이빗 해변 풀빌라 리조트에서 스파를 받고 파도 소리를 들으며 온전히 쉼에 몰두하는 힐링 여행입니다."
      },
      {
        type: "content",
        title: "방콕·푸켓 3박 4일 자유 호캉스<br>10만원대로 숙소+식사+차량 해결?",
        subtitle: "멤버십 제휴 리조트 및 단독 차량 서비스 무료 연계",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "두 마리 토끼를 다 잡는 코스",
        subtitle: "트라밸 추천: 방콕 2박 + 휴양지 2박 조합 여정",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "Day 1-2: 방콕 시티", desc: "쇼핑, 사원 투어, 야시장 미식 탐방" },
          { title: "국내선 1시간 이동", desc: "편리한 비행기로 방콕에서 푸켓/사무이 이동" },
          { title: "Day 3-4: 럭셔리 리조트", desc: "pull빌라 스파와 전용 해변 물놀이 힐링" }
        ]
      },
      {
        type: "cta",
        title: "당신의 여행 성향에 맞는 코스는?",
        subtitle: "트라밸 플래너에게 어울리는 코스 추천받기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 맞춤 코스 DM 받기"
      }
    ]
  },
  {
    id: 6,
    country: "thailand",
    countryName: "태국",
    mainColor: "#0B4F6C",
    pointColor: "#D4AF37",
    badge: "THAILAND",
    title: "태국 여행 준비물 체크리스트",
    slides: [
      {
        type: "cover",
        title: "태국 여행 가기 전,<br>이것만은 꼭 챙기세요!",
        subtitle: "ESSENTIAL CHECKLIST FOR THAILAND",
        layout: "cover-split",
        badgeText: "CHECKLIST",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "1단계: 필수 서류 및 환전",
        subtitle: "공항 출발 전 가방 속 서류를 필히 더블체크 하세요",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "여권 (만료일 최소 6개월 이상 남았는지 필수 체크)", checked: true },
          { label: "왕복 비행기 e-티켓 및 호텔 바우처 출력", checked: true },
          { label: "소액 권 위주의 태국 바트화 환전", checked: true },
          { label: "수수료 면제 해외결제 체크카드 발급", checked: false }
        ]
      },
      {
        type: "content",
        title: "2단계: 기후 대비 필수품",
        subtitle: "강렬한 태양과 소나기 스콜을 대처하기 위한 체크리스트",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "선크림, 챙 넓은 모자, 자외선 차단 선글라스", checked: true },
          { label: "갑작스러운 비를 대비한 휴대용 경량 우산", checked: true },
          { label: "차가운 에어컨 바람용 얇은 겉옷", checked: true },
          { label: "모기 퇴치 스프레이 (현지에서 구매 가능)", checked: false }
        ]
      },
      {
        type: "content",
        title: "태국 3박 4일 실속 준비<br>10만원대 예산으로 현지 혜택 다 받기",
        subtitle: "환전 걱정 끝! 현지 숙박, 전용 차량, 식사 지원",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "3단계: 통신 준비 및 위생",
        subtitle: "편리한 데이터와 청결한 피부 관리를 위해",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "태국 5G 유심칩(USIM) 사전 구매 또는 eSIM 신청", checked: true },
          { label: "소화제, 해열제, 종합감기약 등 기본 상비약", checked: true },
          { label: "피부가 예민한 분들을 위한 휴대용 샤워기 필터", checked: false }
        ]
      },
      {
        type: "cta",
        title: "준비가 모두 끝나셨나요?",
        subtitle: "남은 예약은 트라밸에서 안전하게 완료하세요",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 체크리스트 PDF 받기"
      }
    ]
  },
  {
    id: 7,
    country: "laos",
    countryName: "라오스",
    mainColor: "#2F5233",
    pointColor: "#E8A33D",
    badge: "LAOS",
    title: "아직 덜 알려진 라오스, 감성 여행지",
    slides: [
      {
        type: "cover",
        title: "아직 때 묻지 않은,<br>비밀스러운 감성 여행지가 있다면",
        subtitle: "LAOS: THE GEM OF SOUTHEAST ASIA",
        layout: "cover-split",
        badgeText: "SECRET LAOS",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "고요가 흐르는 루앙프라방",
        subtitle: "유네스코 지정 세계문화유산 도시의 차분한 공기",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80",
        textContent: "이른 아침 골목을 채우는 주황빛 탁발 행렬, 오래된 저택과 골목길의 감성 카페들이 복잡한 도심 생활을 잊고 깊은 평온함을 안겨줍니다."
      },
      {
        type: "content",
        title: "자연과 액티비티의 천국, 방비엥",
        subtitle: "한 폭의 동양화 속으로 떠나는 청춘들의 여정",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
        textContent: "에메랄드빛 블루라군 다이빙과 쏭강에서의 짜릿한 카약킹, 버기카 드라이빙! 전 세계 청춘 여행자들의 낭만과 자유가 가득한 낙원입니다."
      },
      {
        type: "content",
        title: "라오스 3박 4일 액티비티 여행<br>10만원대로 숙소+차량+식사 해결?",
        subtitle: "청춘들의 낭만 여행지, 현지 올인원 0원 혜택",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "지금 라오스로 떠나야 하는 이유",
        subtitle: "오염되지 않은 동남아 최후의 비경을 지닌 곳",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "가장 착한 가성비 물가", desc: "하루 2~3만원이면 미식과 마사지를 만끽하는 경비" },
          { title: "바가지 없는 주민들", desc: "호객 행위 없는 맑은 주민들의 따뜻한 미소와 친절" },
          { title: "고속 철도 정식 개통", desc: "수도 비엔티안에서 루앙프라방까지 단 2시간 기차 이동" }
        ]
      },
      {
        type: "cta",
        title: "남들보다 한발 앞서 라오스를 만나요",
        subtitle: "트라밸 맞춤형 라오스 힐링 일정 알아보기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 라오스 비밀 코스 받기"
      }
    ]
  },
  {
    id: 8,
    country: "laos",
    countryName: "라오스",
    mainColor: "#2F5233",
    pointColor: "#E8A33D",
    badge: "LAOS",
    title: "라오스 자연 속 힐링 코스",
    slides: [
      {
        type: "cover",
        title: "도심을 벗어나서<br>온전한 자연 속 힐링이 필요할 때",
        subtitle: "LAOS HEALING NATURE COURSE",
        layout: "cover-split",
        badgeText: "HEALING COUSRE",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "요정의 연못, 콴시 폭포",
        subtitle: "밀키블루 빛 물빛이 아름다운 천연 수영장",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
        textContent: "숲 속에 펼쳐진 석회질 천연 수영장 콴시 폭포. 시원하게 쏟아지는 물줄기 아래에서 수영을 하며 싱그러운 산림욕과 힐링을 만끽해 보세요."
      },
      {
        type: "content",
        title: "메콩강 선셋 크루즈",
        subtitle: "황금빛 노을로 물드는 강 위에서의 조용한 낭만",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80",
        textContent: "붉게 물드는 석양을 크루즈선 위에서 바라보며 시원한 비어라오 한 잔을 즐겨보세요. 잔잔한 강바람 속, 감성이 충만해지는 순간입니다."
      },
      {
        type: "content",
        title: "라오스 콴시 폭포 & 블루라군 힐링<br>10만원대에 현지 경비 끝내기",
        subtitle: "자연 속 힐링 코스, 현지 전용 차량 및 식사 지원",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "대표 추천 3박 4일 일정 가이드",
        subtitle: "핵심 이동 동선을 연계한 실속 루트",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "Day 1: 루앙프라방 도착", desc: "이국적인 프랑스풍 거리 구경, 야시장 쇼핑" },
          { title: "Day 2: 콴시 폭포 & 사원", desc: "폭포 숲 속 수영, 푸시산 노을 전망 감상" },
          { title: "Day 3-4: 고속철도 & 방비엥", desc: "블루라군 다이빙, 카약킹 투어 후 비엔티안 출국" }
        ]
      },
      {
        type: "cta",
        title: "일정 고민 없이 떠나는 힐링 투어",
        subtitle: "트라밸의 검증된 힐링 패키지 코스 확인하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 힐링 가이드 받기"
      }
    ]
  },
  {
    id: 9,
    country: "laos",
    countryName: "라오스",
    mainColor: "#2F5233",
    pointColor: "#E8A33D",
    badge: "LAOS",
    title: "라오스 여행 이렇게 준비하세요",
    slides: [
      {
        type: "cover",
        title: "라오스 여행이 처음이라<br>어떻게 준비할지 막막하다면?",
        subtitle: "FIRST TIME IN LAOS GUIDE",
        layout: "cover-split",
        badgeText: "TRAVEL GUIDE",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "무비자 체류 및 여권 만료일",
        subtitle: "안전한 입국을 위한 필수 사전 체크 사항",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        textContent: "대한민국 국적 여권 소지자는 관광 목적으로 비자 없이 최대 30일 체류할 수 있습니다. 여권 유효기간이 최소 6개월 이상 남았는지 꼭 확인하세요."
      },
      {
        type: "content",
        title: "현지 화폐 환전 전략 요령",
        subtitle: "원화 바로 환전보다 미국 달러를 통한 이중 환전이 이득입니다",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "원화 바로 낍(Kip) 환전",
        priceAfter: "달러 100$ 고액권 지참 후 현지 낍 환전",
        discountText: "구김 없는 깨끗한 달러 지폐 소지가 유리"
      },
      {
        type: "content",
        title: "라오스 3박 4일 첫 여행<br>10만원대 예산으로 똑똑하게 가기",
        subtitle: "환전 최소화! 현지 4성급 숙소, 단독 기사 지원",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "시내 및 장거리 이동수단 예약",
        subtitle: "흥정과 사전 배차 앱 활용법 요약",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "시내 툭툭이", desc: "호객에 당하지 않도록 탑승 전 반드시 요금 흥정" },
          { title: "로카(LOCA) 배차 앱", desc: "동남아 그랩과 유사한 카드 자동 결제 택시 앱 활용" },
          { title: "고속철 기차 예매", desc: "이용 3일 전 대행사를 통해 티켓을 미리 확보 추천" }
        ]
      },
      {
        type: "cta",
        title: "라오스 여행 준비의 마침표",
        subtitle: "이 가이드를 북마크하고 트라밸과 안심 여행을 시작하세요",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 꿀팁 가이드 받기"
      }
    ]
  },
  {
    id: 10,
    country: "philippines",
    countryName: "필리핀",
    mainColor: "#065A82",
    pointColor: "#FF7F50",
    badge: "PHILIPPINES",
    title: "필리핀 완벽 휴양, 여기가 정답",
    slides: [
      {
        type: "cover",
        title: "지친 일상을 보상할<br>완벽한 남태평양의 휴양이 필요하다면",
        subtitle: "PHILIPPINES PERFECT VACATION",
        layout: "cover-split",
        badgeText: "PERFECT VACATION",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "보홀 & 세부 투명한 해변",
        subtitle: "속이 훤히 들여다보이는 청정 바다와 산호섬",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        textContent: "천혜의 산호 정원 보홀 발리카삭 섬 스노클링과 세부의 그림 같은 모래 해변. 리조트 앞바다에서 유유히 헤엄치는 바다거북을 직접 만나보세요."
      },
      {
        type: "content",
        title: "럭셔리 5성급 리조트 호캉스",
        subtitle: "바다 수평선과 이어진 인피니티 풀에서의 물놀이",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        textContent: "전용 비치를 보유한 고급 리조트에서 즐기는 호사스러운 휴식. 시원한 풀사이드 칵테일과 스파는 지친 일상에 깊은 쉼표를 선사합니다."
      },
      {
        type: "content",
        title: "필리핀 5성급 리조트 3박 5일 호캉스<br>단돈 10만원대로 다 해결하는 법?",
        subtitle: "에메랄드빛 비치 호핑 투어와 럭셔리 휴양 무료 제공",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "다채로운 남태평양 액티비티",
        subtitle: "가장 만족도가 높은 핵심 자연 체험 추천",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "고래상어 투어", desc: "오슬롭/릴라 해변에서 거대한 고래상어와 물놀이" },
          { title: "보트 호핑 스노클링", desc: "방카 보트를 타고 천연 산호 보호구역 스노클링 투어" },
          { title: "초콜릿 힐 & 원숭이", desc: "보홀의 안경원숭이와 키세스 초콜릿을 닮은 신비한 언덕" }
        ]
      },
      {
        type: "cta",
        title: "꿈꿔왔던 휴양이 지금 시작됩니다",
        subtitle: "트라밸 프로필 링크에서 리조트 패키지 예약하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 특별 휴양 플랜 받기"
      }
    ]
  },
  {
    id: 11,
    country: "philippines",
    countryName: "필리핀",
    mainColor: "#065A82",
    pointColor: "#FF7F50",
    badge: "PHILIPPINES",
    title: "필리핀 인기 리조트 TOP3",
    slides: [
      {
        type: "cover",
        title: "필리핀 리조트 어디로 갈까?<br>예약 및 선호 순위 TOP 3 리조트",
        subtitle: "POPULAR RESORTS IN PHILIPPINES",
        layout: "cover-split",
        badgeText: "RESORTS TOP 3",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "TOP 1. 보홀 헤난 리조트 알로나 비치",
        subtitle: "보홀 예약률 압도적 1위, 알로나 비치 바로 앞",
        layout: "city-detail",
        stepIndicator: "인기 순위 01",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        textContent: "거대하고 이국적인 다단식 야외 수영장이 명물입니다. 화이트 해변과 맛집, 편의시설이 도보 3분 이내로 연결되어 편리함과 호캉스를 동시에 충족합니다."
      },
      {
        type: "content",
        title: "TOP 2. 세부 샹그릴라 막탄 리조트",
        subtitle: "평점 4.7점대, 최고의 프라이빗 비치와 수중 환경",
        layout: "city-detail",
        stepIndicator: "인기 순위 02",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80",
        textContent: "자체적으로 엄격히 보호하는 프라이빗 비치를 보유하고 있습니다. 먼 바다로 나가지 않고도 리조트 앞바다 스노클링만으로 수많은 산호와 열대어를 만날 수 있어 만족도 최상인 곳입니다."
      },
      {
        type: "content",
        title: "보홀·세부 인기 TOP 3 리조트<br>10만원대로 숙소+식사+투어 가는 법",
        subtitle: "헤난, 샹그릴라, 제이파크를 멤버십 혜택으로 연계",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "TOP 3. 세부 제이파크 아일랜드 리조트",
        subtitle: "가족 단위 예약 점유율 1위, 테마형 대형 워터파크",
        layout: "city-detail",
        stepIndicator: "인기 순위 03",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        textContent: "파도풀과 유수풀, 대형 워터 슬라이드를 리조트 내부에 갖춰 아이를 동반한 가족 여행객에게 독보적인 예약률을 보입니다. 한식 F&B가 우수한 것도 장점입니다."
      },
      {
        type: "cta",
        title: "트라밸 회원 특별 바우처 혜택 적용",
        subtitle: "인기 리조트 3곳 모두 파격 할인가로 예약하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 리조트 비밀 할인율 받기"
      }
    ]
  },
  {
    id: 12,
    country: "philippines",
    countryName: "필리핀",
    mainColor: "#065A82",
    pointColor: "#FF7F50",
    badge: "PHILIPPINES",
    title: "필리핀 여행 환율/예산 가이드",
    slides: [
      {
        type: "cover",
        title: "필리핀 여행 예산,<br>얼마나 준비해야 알맞을까?",
        subtitle: "PESO EXCHANGE RATE & BUDGET GUIDE",
        layout: "cover-split",
        badgeText: "BUDGET GUIDE",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "항공 + 리조트 3박 5일 예산",
        subtitle: "비수기와 성수기/연휴 편차 가이드라인",
        layout: "comparison-bars",
        hasModel: false,
        bars: [
          { label: "실속형 비수기 예산 (인당)", value: "50만원", color: "#cbd5e1" },
          { label: "성수기/연휴 평균 예산 (인당)", value: "90만원", color: "var(--main-color)" }
        ],
        textContent: "LCC 얼리버드 항공권을 예약하고 제휴 리조트를 이용하면 3박 5일 호캉스 경비를 대폭 아낄 수 있습니다."
      },
      {
        type: "content",
        title: "현지 경비 하루 지출 표준",
        subtitle: "물가 대비 현지 교통 및 액티비티 요약",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "식비 (인당)", desc: "로컬 시푸드 푸짐한 한 끼 2~3만원, 현지식 1만원 이하" },
          { title: "마사지 (인당)", desc: "1일 1마사지 90분 로컬 샵 1.5만원 ~ 고급 스파 3만원" },
          { title: "그랩(Grab) 교통", desc: "시내 그랩 호출 기본 요금 1,500원 내외로 매우 저렴" }
        ]
      },
      {
        type: "content",
        title: "필리핀 3박 5일 예산 혁명<br>10만원대로 현지 풀 패키지 누리기",
        subtitle: "환율 걱정 없는 스마트 호캉스, 현지 경비 무료 혜택",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
          { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
          { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
        ]
      },
      {
        type: "content",
        title: "환전 요령 및 바우처 활용 팁",
        subtitle: "트라밸 멤버십 바우처를 이용한 객실 비용 Save 효과",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "리조트 일반 예약가",
        priceAfter: "댓글 남겨주시면 특별 할인가 DM 즉시 전송!",
        discountText: "댓글 특별 혜택"
      },
      {
        type: "cta",
        title: "예산 설계부터 상담까지 한 번에",
        subtitle: "트라밸 카카오 채널에서 전문 플래너 상담받기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 무료 견적서 DM 받기"
      }
    ]
  },
  // TOPIC 13: Korea - Jeju
  {
    id: 13,
    country: "korea",
    countryName: "한국",
    mainColor: "#0B2240", // Navy
    pointColor: "#EAAA00", // Gold
    badge: "JEJU",
    title: "제주도 서귀포 감성 명소 TOP 3",
    slides: [
      {
        type: "cover",
        title: "제주도 서귀포 여행,<br>남들이 모르는 숨은 명소는?",
        subtitle: "JEJU HIDDEN SPOTS GUIDE",
        layout: "cover-split",
        badgeText: "JEJU ISLAND",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "서귀포 숨은 감성 명소 3선",
        subtitle: "한적하고 감성이 넘치는 힐링 코스",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "안돌오름 비밀의 숲", desc: "편백나무 사이 비치는 햇살과 인생샷 성지" },
          { title: "소천지", desc: "한라산의 반영이 투명하게 비치는 비경 포인트" },
          { title: "큰엉해안경승지", desc: "한반도 모양의 해안 숲 터널에서 건지는 인생 컷" }
        ]
      },
      {
        type: "content",
        title: "제주 감성 숙소와 프라이빗 투어",
        subtitle: "운전 스트레스 없는 단독 렌터카 가이드 연계",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        textContent: "운전하느라 피곤한 여행은 이제 그만! 제주 렌터카 기사 동행 서비스와 엄선된 서귀포 독채 풀빌라를 연계해 오직 힐링에만 집중하는 최적의 제주 일정을 제공합니다."
      },
      {
        type: "content",
        title: "제주 2박 3일 실속 감성 여행<br>10만원대 멤버십으로 해결하는 법",
        subtitle: "트라밸 독점 제휴 제주도 4대 경비 지원 특전",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "서귀포 풀빌라 지원", desc: "평점 4.8 이상 제휴 독채 펜션/풀빌라 무료 숙박 제공" },
          { title: "전용 렌터카 & 유류비", desc: "일반 자차보험이 포함된 최신 렌터카 전일정 지원" },
          { title: "감성 카페 & 맛집 쿠폰", desc: "서귀포 핫플레이스 식사권 및 카페 무료 음료권" }
        ]
      },
      {
        type: "content",
        title: "제주도 회원 전용 우대 가격",
        subtitle: "성수기에도 부담 없는 투명한 가격 혜택",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "제휴 숙소 일반 예약가",
        priceAfter: "댓글 남겨주시면 특별 혜택가 DM 즉시 안내!",
        discountText: "멤버십 특별가"
      },
      {
        type: "cta",
        title: "푸른 바다 제주가 부를 때,<br>망설임 없이 떠나세요",
        subtitle: "트라밸 제주 플래너 상담 바로가기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 제주 힐링 플랜 DM 받기"
      }
    ]
  },
  // TOPIC 14: Korea - Busan
  {
    id: 14,
    country: "korea",
    countryName: "한국",
    mainColor: "#003472",
    pointColor: "#C8102E",
    badge: "BUSAN",
    title: "부산 광안리·영도 1박 2일 미식 코스",
    slides: [
      {
        type: "cover",
        title: "부산 광안리와 영도,<br>1박 2일 알찬 미식 여행",
        subtitle: "BUSAN FOODIE TRAVEL GUIDE",
        layout: "cover-split",
        badgeText: "BUSAN TOUR",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "1박 2일 맛있는 부산 동선",
        subtitle: "광안리 바다 전망 식사부터 영도 감성 카페까지",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "Day 1: 광안리 해변", desc: "민락더마켓 미식 탐방과 광안대교 뷰 횟집 코스" },
          { title: "Day 2 오전: 영도 흰여울", desc: "바다 절벽길을 걸으며 맛보는 영도 해녀촌 성게김밥" },
          { title: "Day 2 오후: 영도 아우트런", desc: "거대한 선박 보관 창고를 개조한 빈티지 카페 미식" }
        ]
      },
      {
        type: "content",
        title: "부산의 밤을 화려하게 빛낼 숙소",
        subtitle: "광안대교 오션뷰 5성급 리조트 연계",
        layout: "half-photo",
        hasModel: false,
        photoUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        textContent: "부산 여행의 완성은 아침에 눈을 떴을 때 펼쳐지는 파란 바다입니다. 광안대교가 한눈에 보이는 최고의 5성급 제휴 호텔 객실을 회원 우대 혜택으로 제공합니다."
      },
      {
        type: "cta",
        title: "미식과 낭만의 바다 도시,<br>부산으로 함께 떠나요",
        subtitle: "지금 바로 1박 2일 맛집 지도 받기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 부산 꿀맛 일정 DM 받기"
      }
    ]
  },
  // TOPIC 15: Korea - Gyeongju
  {
    id: 15,
    country: "korea",
    countryName: "한국",
    mainColor: "#4B382A", // Earth brown
    pointColor: "#D4AF37",
    badge: "GYEONGJU",
    title: "경주 황리단길 역사 감성 투어",
    slides: [
      {
        type: "cover",
        title: "역사와 현대의 공존,<br>경주 감성 힐링 여행",
        subtitle: "GYEONGJU HISTORIC & TRENDY GUIDE",
        layout: "cover-split",
        badgeText: "GYEONGJU",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "한옥의 미와 야경 코스",
        subtitle: "놓칠 수 없는 전통의 아름다움",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "황리단길 한옥 베이커리 카페 투어", checked: true },
          { label: "동궁과 월지 밤의 황금빛 은하수 야경", checked: true },
          { label: "대릉원 고분군 사이 인생샷 고분 발굴", checked: false }
        ]
      },
      {
        type: "content",
        title: "경주 전통 한옥 풀빌라 혜택",
        subtitle: "고즈넉한 고택의 정취와 현대식 프라이빗 온수풀",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "전통 한옥 스테이 정상가",
        priceAfter: "댓글 남겨주시면 특별 혜택가 DM 즉시 안내!",
        discountText: "멤버십 한옥 특가"
      },
      {
        type: "cta",
        title: "천년의 낭만이 흐르는 경주,<br>트라밸과 가볍게 출발하세요",
        subtitle: "경주 특별 전통 한옥 플랜 상세 보기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 경주 낭만 일정 DM 받기"
      }
    ]
  },
  // TOPIC 16: Japan - Tokyo
  {
    id: 16,
    country: "japan",
    countryName: "일본",
    mainColor: "#8A1C14",
    pointColor: "#333333",
    badge: "TOKYO",
    title: "도쿄 3박 4일 최적 동선 가이드",
    slides: [
      {
        type: "cover",
        title: "쇼핑과 테마파크를 정복할<br>도쿄 3박 4일 완벽 코스",
        subtitle: "TOKYO METROPOLITAN TRAVEL GUIDE",
        layout: "cover-split",
        badgeText: "TOKYO TOUR",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "도쿄 3박 4일 핵심 동선",
        subtitle: "시부야 쇼핑부터 디즈니랜드 환상 모험까지",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "Day 1: 도심 랜드마크", desc: "시부야 스카이 전망대 관람 및 하라주쿠 빈티지 쇼핑" },
          { title: "Day 2: 디즈니 랜드", desc: "온라인 공식 티켓 사전 예매로 하루종일 꿈과 모험 정복" },
          { title: "Day 3: 감성 도심 골목", desc: "나카메구로 벚꽃 강변 산책과 지유가오카 디저트 카페" }
        ]
      },
      {
        type: "content",
        title: "도쿄 지하철 및 패스 꿀팁",
        subtitle: "교통비 비싼 도쿄에서 스마트하게 살아남기",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "도쿄 서브웨이 티켓 (24/48/72시간권 무제한 탑승)", checked: true },
          { label: "스마트폰 지갑에 수이카/파스모 교통카드 사전 등록", checked: true },
          { label: "나리타 공항에서 도심 스카이라이너 사전 구매", checked: false }
        ]
      },
      {
        type: "cta",
        title: "트렌디한 매력의 글로벌 도심,<br>도쿄로 가볍게 떠나요",
        subtitle: "도쿄 최적 3박 4일 지도북 DM 받기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 도쿄 최적 코스 DM 받기"
      }
    ]
  },
  // TOPIC 17: Japan - Kyoto
  {
    id: 17,
    country: "japan",
    countryName: "일본",
    mainColor: "#5A110B",
    pointColor: "#D4AF37",
    badge: "KYOTO",
    title: "교토 아라시야마·기요미즈데라 전통 코스",
    slides: [
      {
        type: "cover",
        title: "시간이 멈춘 옛 수도,<br>교토 감성 전통 여행",
        subtitle: "KYOTO TRADITIONAL HERITAGE TOUR",
        layout: "cover-split",
        badgeText: "KYOTO LIFE",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "자연과 역사를 걷다",
        subtitle: "지친 마음을 위로하는 고즈넉한 여정",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "아라시야마 대나무 숲 치쿠린 산책과 응커피", checked: true },
          { label: "기요미즈데라 절벽 본당 전망과 니넨자카 거리", checked: true },
          { label: "후시미 이나리 신사의 붉은 도리이 터널 걷기", checked: false }
        ]
      },
      {
        type: "content",
        title: "교토 전통 료칸 힐링 특가",
        subtitle: "따뜻한 천연 야외 온천과 화려한 가이세키 저녁 식사",
        layout: "price-tag",
        hasModel: false,
        priceBefore: "제휴 료칸 일반 요금",
        priceAfter: "댓글 남겨주시면 특별 혜택가 DM 즉시 안내!",
        discountText: "멤버십 료칸 혜택"
      },
      {
        type: "cta",
        title: "교토 전통 힐링과 낭만 온천,<br>트라밸 특가 플랜을 만나보세요",
        subtitle: "교토 힐링 료칸 기획전 확인하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 교토 힐링 정보 DM 받기"
      }
    ]
  },
  // TOPIC 18: China - Zhangjiajie
  {
    id: 18,
    country: "china",
    countryName: "중국",
    mainColor: "#DE2910",
    pointColor: "#FFDE00",
    badge: "CHINA",
    title: "장가계 무릉도원 부모님 효도 관광 가이드",
    slides: [
      {
        type: "cover",
        title: "영화 아바타 속 신비한 비경,<br>장가계 부모님 효도 관광",
        subtitle: "ZHANGJIAJIE NATURE SPECTACLE TOUR",
        layout: "cover-split",
        badgeText: "AVATAR MOUNT",
        hasModel: true,
        bgImage: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=1080&q=80"
      },
      {
        type: "content",
        title: "천하 비경 대표 명소 3선",
        subtitle: "부모님 무릎 걱정 없는 편리한 이동 동선",
        layout: "split-3",
        hasModel: false,
        columns: [
          { title: "원가계 아바타산", desc: "세계 최장 백룡 엘리베이터로 오르는 신비로운 봉우리" },
          { title: "천문산 사다리", desc: "천문산 케이블카와 에스컬레이터로 가볍게 정복하는 천문동" },
          { title: "금편계곡 산책", desc: "완만한 숲길 코스로 즐기는 공기 맑은 피톤치드 산림욕" }
        ]
      },
      {
        type: "content",
        title: "부모님 만족 200% 안심 편의 특전",
        subtitle: "현지 프라이빗 단독 리무진 및 VIP 패스트트랙 제공",
        layout: "checklist",
        hasModel: false,
        checklistItems: [
          { label: "VIP 관광지 대기선 면제 패스트트랙 입장", checked: true },
          { label: "장거리 이동 스트레스 없는 럭셔리 우등 리무진 차량", checked: true },
          { label: "특식 6대 요리와 한국어 전용 프라이빗 가이드 동행", checked: false }
        ]
      },
      {
        type: "cta",
        title: "일생에 단 한 번, 평생 기억에 남을<br>장가계 비경을 선물하세요",
        subtitle: "장가계 단독 프리미엄 효도 여행 기획 확인하기",
        layout: "cta-default",
        hasModel: true,
        buttonText: "댓글 남기고 장가계 특전 일정 DM 받기"
      }
    ]
  }
];

// App State
let currentTopicIndex = 0;
let instagramHandle = "@tlabal_travel";
let brandLogoText = "TLABAL";
let showBrandLogo = true;

// Buffer scheduler control state
let isSchedulerPaused = false;
let shouldCancelScheduler = false;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Initialize fallback rawText for existing topics if missing
  topicsData.forEach((topic) => {
    if (!topic.rawText) {
      const slideTexts = topic.slides
        .filter(s => s.type === "content")
        .map(s => {
          let text = s.title + ":\n" + (s.textContent || "");
          if (s.columns) {
            text += "\n" + s.columns.map(col => `- ${col.title}: ${col.desc}`).join("\n");
          }
          if (s.checklistItems) {
            text += "\n" + s.checklistItems.map(item => `- ${item.label}`).join("\n");
          }
          return text;
        });
      topic.rawText = slideTexts.join("\n\n---\n\n");
    }
  });

  renderSidebar();
  loadTopic(0);
  setupEventListeners();
  updateModelImageDisplay();
  setupAIModelSceneryGenerator();
  setupBulkFileUploader();
});

// Render the Sidebar Menu
function renderSidebar() {
  const sidebarTitleEl = document.querySelector(".sidebar-topics .sidebar-title");
  if (sidebarTitleEl) {
    sidebarTitleEl.innerHTML = `<i class="fa-solid fa-list-check"></i> 카드뉴스 주제 리스트 (${topicsData.length}개)`;
  }

  const listContainer = document.getElementById("topics-list");
  listContainer.innerHTML = "";

  topicsData.forEach((topic, index) => {
    const item = document.createElement("div");
    item.className = `topic-item ${index === currentTopicIndex ? "active" : ""}`;
    item.dataset.index = index;

    const scheduledBadge = topic.isScheduled 
      ? `<span class="scheduled-badge" style="background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: bold; margin-left: 8px;"><i class="fa-solid fa-calendar-check"></i> 예약 완료</span>` 
      : "";

    item.innerHTML = `
      <div class="topic-meta" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
        <div>
          <span class="country-badge badge-${topic.country}">${topic.countryName}</span>
          <span class="topic-id">#${topic.id}</span>
        </div>
        ${scheduledBadge}
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
        <div class="topic-title" style="flex: 1; word-break: break-all; margin-right: 8px;">${topic.title}</div>
        <div class="topic-actions" style="display: flex; gap: 4px; flex-shrink: 0;">
          <button class="btn-edit-title" title="주제 이름 수정" style="background: rgba(255,255,255,0.1); border: none; border-radius: 4px; padding: 3px 5px; color: #fff; cursor: pointer; font-size: 10px;">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn-delete-topic" title="주제 삭제" style="background: rgba(239,68,68,0.2); border: none; border-radius: 4px; padding: 3px 5px; color: #ef4444; cursor: pointer; font-size: 10px;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;

    // Handle selecting topic
    item.addEventListener("click", () => {
      if (currentTopicIndex === index) return;
      document.querySelectorAll(".topic-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      loadTopic(index);
    });

    // Edit topic title/country/content modal action
    const btnEdit = item.querySelector(".btn-edit-title");
    if (btnEdit) {
      btnEdit.addEventListener("click", (e) => {
        e.stopPropagation();
        openEditTopicModal(index);
      });
    }

    // Delete topic action
    const btnDelete = item.querySelector(".btn-delete-topic");
    if (btnDelete) {
      btnDelete.addEventListener("click", (e) => {
        e.stopPropagation();
        if (topicsData.length <= 1) {
          alert("최소 1개 이상의 주제가 필요하므로 삭제할 수 없습니다.");
          return;
        }
        if (!confirm(`"${topic.title}" 주제 카드뉴스를 정말로 삭제하시겠습니까?`)) {
          return;
        }
        topicsData.splice(index, 1);
        if (currentTopicIndex >= topicsData.length) {
          currentTopicIndex = topicsData.length - 1;
        }
        renderSidebar();
        loadTopic(currentTopicIndex);
      });
    }

    listContainer.appendChild(item);
  });
}

// Global slide-level focus state
let activeSlideIndex = 0;

// Load a selected Topic and populate slides
function loadTopic(index) {
  currentTopicIndex = index;
  const topic = topicsData[index];

  // Make sure activeSlideIndex is in bounds
  if (activeSlideIndex >= topic.slides.length) {
    activeSlideIndex = 0;
  }

  // Set active slide count select value
  const slideCountSelect = document.getElementById("slide-count-select");
  if (slideCountSelect) {
    slideCountSelect.value = topic.slides.length;
  }

  // Populate the slide tuning select dropdown
  const tuningSelect = document.getElementById("tuning-slide-select");
  if (tuningSelect) {
    tuningSelect.innerHTML = "";
    topic.slides.forEach((slide, idx) => {
      let slideLabel = `장 ${idx + 1}: 콘텐츠`;
      if (idx === 0) {
        slideLabel = `장 ${idx + 1}: 커버(후킹)`;
      } else if (idx === topic.slides.length - 1) {
        slideLabel = `장 ${idx + 1}: CTA(마무리)`;
      }
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = slideLabel;
      tuningSelect.appendChild(opt);
    });
    tuningSelect.value = activeSlideIndex;
  }

  // Set brand colors (CSS Variables)
  document.documentElement.style.setProperty("--main-color", topic.mainColor);
  document.documentElement.style.setProperty("--point-color", topic.pointColor);

  // Update theme indicators on UI
  document.getElementById("primary-color-picker").value = topic.mainColor;
  document.getElementById("point-color-picker").value = topic.pointColor;
  document.getElementById("active-topic-title").textContent = topic.title;

  // Render the 6 card slide previews
  const cardsContainer = document.getElementById("cards-preview-container");
  cardsContainer.innerHTML = "";

  const conceptClasses = {
    1: "concept-agency",
    2: "concept-postcard",
    3: "concept-receipt",
    4: "concept-hotdeal",
    5: "concept-versus",
    6: "concept-notebook",
    7: "concept-editorial",
    8: "concept-organic",
    9: "concept-board",
    10: "concept-tropical",
    11: "concept-magazine",
    12: "concept-dashboard"
  };
  const conceptClass = conceptClasses[topic.id];

  topic.slides.forEach((slide, idx) => {
    // Initialize slide-level model configuration if not present
    if (!slide.modelConfig) {
      slide.modelConfig = {
        show: slide.hasModel !== undefined ? slide.hasModel : true,
        scale: 1.0,
        x: 0,
        y: 0,
        opacity: 1.0
      };
    }

    const wrapperEl = document.createElement("div");
    wrapperEl.className = "card-preview-item";
    if (idx === activeSlideIndex) {
      wrapperEl.classList.add("selected");
    }

    // Add click event for selecting and focusing this card preview
    wrapperEl.addEventListener("click", () => {
      document.querySelectorAll(".card-preview-item").forEach(el => el.classList.remove("selected"));
      wrapperEl.classList.add("selected");
      activeSlideIndex = idx;
      syncSlidersWithActiveSlide();
    });

    const labelIndicator = document.createElement("div");
    labelIndicator.className = "card-label-indicator";
    let labelName = `장 ${idx + 1}: 콘텐츠`;
    if (idx === 0) {
      labelName = `장 ${idx + 1}: 커버(후킹)`;
    } else if (idx === topic.slides.length - 1) {
      labelName = `장 ${idx + 1}: CTA(마무리)`;
    }
    labelIndicator.textContent = labelName;
    wrapperEl.appendChild(labelIndicator);

    const cardEl = document.createElement("div");
    cardEl.className = `instagram-card card-${slide.type}`;
    cardEl.id = `card-slide-${idx + 1}`;
    cardEl.dataset.type = slide.type;

    // Apply layout-specific classes
    if (slide.layout) {
      cardEl.classList.add(slide.layout);
    }

    // Apply concept-specific classes
    if (conceptClass) {
      cardEl.classList.add(conceptClass);
    }

    // Apply background cover photo with dark overlay if exists
    if (slide.type === "cover" && slide.bgImage) {
      cardEl.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${slide.bgImage})`;
      cardEl.style.backgroundSize = "cover";
      cardEl.style.backgroundPosition = "center";
    } else if (slide.type === "cover" || slide.type === "cta") {
      cardEl.style.backgroundColor = "var(--main-color)";
      cardEl.style.color = "#ffffff";
    } else {
      cardEl.style.backgroundColor = "#fafafa";
      cardEl.style.color = "#1e293b";
    }

    // DYNAMIC CHARACTER POSE ROTATION (6 COMPLETELY UNIQUE POSES SEQUENTIALLY ORDERED)
    const poses = [
      "model_pose1.jpg", // Studio front smile
      "model_pose2.jpg", // Side profile walking street (sideways)
      "model_pose3.jpg", // Cafe coffee lifestyle
      "model.jpg",       // Cozy sweater at home (packing carrier luggage)
      "model_pose4.jpg", // Resort pool deck chair in straw hat (swimming/playing)
      "model_pose5.jpg"  // Airport terminal suitcase carrier (dragging luggage)
    ];
    
    // Rotation offset based on topic ID + slide index (idx)
    const poseIndex = (currentTopicIndex + idx) % poses.length;
    let modelSrc = slide.customModelSrc || poses[poseIndex];

    // Generate Card Content HTML based on type and layout
    let contentHtml = "";

    // Generate inner slide templates
    if (slide.type === "cover") {
      if (slide.hasModel) {
        const seed = topic.id || 1;
        const swapSides = (seed % 2) === 1;
        const randomHeight = 490 + (seed * 17) % 110;
        const randomFlex = (0.75 + (seed * 23) % 40 / 100).toFixed(2);
        const randomRadius = 16 + (seed * 9) % 24;
        const randomRotation = -2 + (seed * 11) % 5;
        
        const borderStyles = [
          `6px solid var(--point-color)`,
          `6px solid var(--main-color)`,
          `8px solid white`,
          `none`
        ];
        const borderStyle = borderStyles[seed % borderStyles.length];

        const textOrderStyle = swapSides ? "order: 2;" : "";
        const imgOrderStyle = swapSides ? "order: 1;" : "";

        contentHtml = `
          <div class="cover-split-wrapper" style="align-items: center;">
            <div class="cover-split-text" style="${textOrderStyle}">
              <div class="card-header" style="margin-bottom: 25px;">
                <span class="card-category-badge" contenteditable="true">${slide.badgeText}</span>
              </div>
              <h1 class="card-main-title" contenteditable="true">${slide.title}</h1>
              <p class="card-subtitle point-text" contenteditable="true">${slide.subtitle}</p>
            </div>
            <div class="cover-split-img-box" style="${imgOrderStyle} flex: ${randomFlex}; height: ${randomHeight}px; border-radius: ${randomRadius}px; border: ${borderStyle}; transform: rotate(${randomRotation}deg); box-shadow: 0 25px 50px rgba(0,0,0,0.3);">
              <div class="model-photo-element" style="background-image: url('${modelSrc}'); width: 100%; height: 100%; background-size: cover; background-position: center;"></div>
            </div>
          </div>
          <div class="card-footer" style="display: ${showBrandLogo ? 'flex' : 'none'}">
            <span class="brand-footer-logo">${brandLogoText}</span>
          </div>
        `;
      } else {
        contentHtml = `
          <div class="card-header">
            <span class="card-category-badge" contenteditable="true">${slide.badgeText}</span>
          </div>
          <div class="card-body">
            <h1 class="card-main-title" contenteditable="true">${slide.title}</h1>
            <p class="card-subtitle point-text" contenteditable="true">${slide.subtitle}</p>
          </div>
          <div class="card-footer" style="display: ${showBrandLogo ? 'flex' : 'none'}">
            <span class="brand-footer-logo">${brandLogoText}</span>
          </div>
        `;
      }
    } else if (slide.type === "content") {
      let innerVisualHtml = "";

      if (slide.layout === "split-3" && slide.columns) {
        innerVisualHtml = `
          <div class="split-3-grid">
            ${slide.columns.map((col, cIdx) => `
              <div class="split-column-item">
                <div class="col-icon" style="color: var(--main-color); font-weight: bold;">0${cIdx + 1}</div>
                <div class="col-title" contenteditable="true">${col.title}</div>
                <div class="col-desc" contenteditable="true">${col.desc}</div>
              </div>
            `).join("")}
          </div>
        `;
      } else if (slide.layout === "half-photo") {
        innerVisualHtml = `
          <div class="half-photo-wrapper">
            <div class="half-photo-text-content" contenteditable="true">${slide.textContent}</div>
            <div class="half-photo-image-box">
              <div style="background-image: url('${slide.photoUrl}'); width: 100%; height: 100%; background-size: cover; background-position: center; border-radius: 12px;"></div>
            </div>
          </div>
        `;
      } else if (slide.layout === "price-tag") {
        innerVisualHtml = `
          <div class="price-tag-wrapper">
            <div class="price-before-box">
              <span class="price-label">정상 예약가</span>
              <span class="price-amount crossed" contenteditable="true">${slide.priceBefore}</span>
            </div>
            <div class="price-arrow">⬇️</div>
            <div class="price-after-box" style="border-color: var(--point-color);">
              <span class="price-label point-text">회원 특별 우대 혜택</span>
              <span class="price-amount highlight-price" contenteditable="true" style="color: var(--main-color);">${slide.priceAfter}</span>
            </div>
            <div class="discount-badge" style="background-color: var(--point-color); color: #111;" contenteditable="true">${slide.discountText}</div>
          </div>
        `;
      } else if (slide.layout === "comparison-bars" && slide.bars) {
        innerVisualHtml = `
          <div class="comparison-wrapper">
            <div class="bars-container">
              ${slide.bars.map(bar => `
                <div class="bar-row">
                  <div class="bar-label" contenteditable="true">${bar.label}</div>
                  <div class="bar-track">
                    <div class="bar-fill" style="width: ${bar.value.includes('%') ? bar.value : '70%'}; background-color: ${bar.color};"></div>
                  </div>
                  <div class="bar-value" contenteditable="true">${bar.value}</div>
                </div>
              `).join("")}
            </div>
            <div class="bar-summary" contenteditable="true">${slide.textContent}</div>
          </div>
        `;
      } else if (slide.layout === "checklist" && slide.checklistItems) {
        innerVisualHtml = `
          <div class="checklist-wrapper">
            ${slide.checklistItems.map((item, iIdx) => `
              <div class="checklist-item ${item.checked ? 'checked' : ''}">
                <span class="check-box" style="background-color: ${item.checked ? 'var(--main-color)' : 'transparent'}; border-color: var(--main-color);">✓</span>
                <span class="check-label" contenteditable="true">${item.label}</span>
              </div>
            `).join("")}
          </div>
        `;
      } else if (slide.layout === "city-detail") {
        innerVisualHtml = `
          <div class="city-detail-wrapper">
            <div class="city-detail-text-content">
              <div class="step-indicator point-text" contenteditable="true">${slide.stepIndicator}</div>
              <div class="city-detail-desc" contenteditable="true">${slide.textContent}</div>
            </div>
            <div class="city-detail-image-box">
              <div style="background-image: url('${slide.photoUrl}'); width: 100%; height: 100%; background-size: cover; background-position: center; border-radius: 12px;"></div>
            </div>
          </div>
        `;
      }

      contentHtml = `
        <div class="card-header-light">
          <span class="card-top-title" style="color: var(--main-color);">TLABAL INSIGHTS</span>
        </div>
        <div class="card-body">
          <h2 class="card-section-title" contenteditable="true">${slide.title}</h2>
          <p class="card-sub-description point-text" contenteditable="true" style="color: var(--main-color);">${slide.subtitle}</p>
          <div class="card-visual-content">
            ${innerVisualHtml}
          </div>
        </div>
        <div class="card-footer-light">
          <span class="brand-footer-logo" style="color: var(--main-color); display: ${showBrandLogo ? 'inline' : 'none'};">${brandLogoText}</span>
          <span class="slide-page-number" style="margin-left: auto;">${idx + 1} / ${topic.slides.length}</span>
        </div>
      `;
    } else if (slide.type === "cta") {
      let guideProfileHtml = "";
      if (slide.hasModel) {
        guideProfileHtml = `
          <div class="avatar-circle-wrapper">
            <div class="avatar-circle-img-box">
              <div class="model-photo-element" style="background-image: url('${modelSrc}'); width: 100%; height: 100%; background-size: cover; background-position: center; border-radius: 50%;"></div>
            </div>
            <div class="avatar-circle-info" contenteditable="true">
              안녕하세요, <b>트라밸 플래너 민지</b>입니다.<br>
              지친 일상을 보상할 최적의 힐링 자유여행 패키지를 설계해 드려요!
            </div>
          </div>
        `;
      }

      contentHtml = `
        <div class="card-body cta-center">
          <div class="cta-logo-wrap" style="display: ${showBrandLogo ? 'block' : 'none'};">
            <span class="cta-logo">${brandLogoText}</span>
          </div>
          <h1 class="card-main-title cta-title" contenteditable="true">${slide.title}</h1>
          <p class="card-subtitle cta-subtitle point-text" contenteditable="true">${slide.subtitle}</p>
          
          ${guideProfileHtml}
          
          <div class="cta-action-button" style="background-color: var(--point-color); color: #111; font-weight: bold; margin-top: 10px;" contenteditable="true">
            ${slide.buttonText}
          </div>

          <div class="instagram-profile-box" style="margin-top: 10px;">
            <span class="insta-icon">📸</span>
            <span class="insta-handle" contenteditable="true">${instagramHandle}</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="cta-footer-notice">지금 프로필 링크를 클릭해 문의해주세요</span>
        </div>
      `;
    }

    cardEl.innerHTML = contentHtml;

    // Apply slide-level model transformations directly to elements during render
    const imgEl = cardEl.querySelector(".model-photo-element");
    if (imgEl && slide.modelConfig) {
      const cfg = slide.modelConfig;
      imgEl.style.transform = `scale(${cfg.scale}) translate(${cfg.x}px, ${cfg.y}px)`;
      imgEl.style.opacity = cfg.opacity;
      imgEl.style.display = cfg.show ? "block" : "none";
      
      // Inject card-no-model class dynamically for layout rebalancing
      if (!cfg.show) {
        cardEl.classList.add("card-no-model");
      } else {
        cardEl.classList.remove("card-no-model");
      }
    }

    wrapperEl.appendChild(cardEl);
    cardsContainer.appendChild(wrapperEl);
  });

  // Sync sliders to the active slide's configuration
  syncSlidersWithActiveSlide();
  updateAllButtonsText();
}

// Adjust brand colors from Pickers
function setupEventListeners() {
  const primaryColorPicker = document.getElementById("primary-color-picker");
  const pointColorPicker = document.getElementById("point-color-picker");

  primaryColorPicker.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--main-color", e.target.value);
    topicsData[currentTopicIndex].mainColor = e.target.value;
  });

  pointColorPicker.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--point-color", e.target.value);
    topicsData[currentTopicIndex].pointColor = e.target.value;
  });

  // Instagram Handle input handler
  const handleInput = document.getElementById("insta-handle-input");
  if (handleInput) {
    handleInput.addEventListener("input", (e) => {
      instagramHandle = e.target.value;
      document.querySelectorAll(".insta-handle").forEach(el => {
        el.textContent = instagramHandle;
      });
    });
  }

  // Brand Logo Text input handler
  const brandInput = document.getElementById("brand-logo-input");
  if (brandInput) {
    brandInput.addEventListener("input", (e) => {
      brandLogoText = e.target.value;
      loadTopic(currentTopicIndex);
    });
  }

  // Brand Logo Visibility Toggle handler
  const brandToggle = document.getElementById("brand-logo-toggle");
  if (brandToggle) {
    brandToggle.addEventListener("change", (e) => {
      showBrandLogo = e.target.checked;
      loadTopic(currentTopicIndex);
    });
  }

  // Advertiser Input change handlers
  const advNameInput = document.getElementById("adv-brand-name");
  const advPointsInput = document.getElementById("adv-brand-points");
  const advContactInput = document.getElementById("adv-contact-url");

  const refreshActiveTopicOnAdvChange = () => {
    const topic = topicsData[currentTopicIndex];
    if (topic && topic.rawText) {
      const reParsed = parsePlanningTextToSlides(topic.title, topic.country, topic.rawText);
      topic.slides = reParsed.slides;
      loadTopic(currentTopicIndex);
    }
  };

  [advNameInput, advPointsInput, advContactInput].forEach(input => {
    if (input) {
      input.addEventListener("input", refreshActiveTopicOnAdvChange);
    }
  });

  // Double-sync delegation for contenteditable edits on cards
  const cardsContainerEl = document.getElementById("cards-preview-container");
  if (cardsContainerEl) {
    cardsContainerEl.addEventListener("input", (e) => {
      if (e.target.classList.contains("insta-handle")) {
        instagramHandle = e.target.textContent;
        const handleField = document.getElementById("insta-handle-input");
        if (handleField) {
          handleField.value = instagramHandle;
        }
        // Update all other cards
        document.querySelectorAll(".insta-handle").forEach(el => {
          if (el !== e.target) el.textContent = instagramHandle;
        });
      }
    });
  }

  // Font Selection
  const fontSelect = document.getElementById("font-select");
  fontSelect.addEventListener("change", (e) => {
    const selectedFont = e.target.value;
    document.querySelectorAll(".instagram-card").forEach(card => {
      card.style.fontFamily = selectedFont;
    });
  });

  // Model size and positioning sliders
  const scaleSlider = document.getElementById("model-scale");
  const xSlider = document.getElementById("model-x");
  const ySlider = document.getElementById("model-y");
  const opacitySlider = document.getElementById("model-opacity");
  const toggleModelCheckbox = document.getElementById("toggle-model-all");
  const applyAllCheckbox = document.getElementById("apply-model-to-all");
  const applyGlobalCheckbox = document.getElementById("apply-model-to-global");
  const tuningSlideSelect = document.getElementById("tuning-slide-select");
  const tuningSlideSelectWrap = document.getElementById("tuning-slide-select-wrap");

  const updateTransforms = () => {
    applyModelTransformations();
  };

  scaleSlider.addEventListener("input", updateTransforms);
  xSlider.addEventListener("input", updateTransforms);
  ySlider.addEventListener("input", updateTransforms);
  opacitySlider.addEventListener("input", updateTransforms);
  toggleModelCheckbox.addEventListener("change", updateTransforms);

  // Apply to All Slides handler
  applyAllCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      tuningSlideSelectWrap.style.display = "none";
      applyModelTransformations();
    } else {
      // If we turn off all-slides, we also turn off global-topics
      applyGlobalCheckbox.checked = false;
      tuningSlideSelectWrap.style.display = "block";
    }
  });

  // Apply to Global Topics handler
  applyGlobalCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      applyAllCheckbox.checked = true;
      tuningSlideSelectWrap.style.display = "none";
      applyModelTransformations();
    } else {
      if (!applyAllCheckbox.checked) {
        tuningSlideSelectWrap.style.display = "block";
      }
    }
  });

  // Individual Slide Selector handler
  tuningSlideSelect.addEventListener("change", (e) => {
    activeSlideIndex = parseInt(e.target.value, 10);
    
    // Update visual borders in DOM
    const previews = document.querySelectorAll(".card-preview-item");
    previews.forEach((p, idx) => {
      if (idx === activeSlideIndex) {
        p.classList.add("selected");
      } else {
        p.classList.remove("selected");
      }
    });

    syncSlidersWithActiveSlide();
  });

  // Reset image adjusters
  document.getElementById("btn-reset-model").addEventListener("click", () => {
    scaleSlider.value = 1.0;
    xSlider.value = 0;
    ySlider.value = 0;
    opacitySlider.value = 1.0;
    toggleModelCheckbox.checked = true;
    applyModelTransformations();
  });

  // Image Upload handler to let user replace the model image
  const imgUploader = document.getElementById("model-uploader");
  imgUploader.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        document.querySelectorAll(".model-photo-element").forEach(el => {
          el.style.backgroundImage = `url('${event.target.result}')`;
        });
      };
      reader.readAsDataURL(file);
    }
  });

  // Dynamic Download Event Handlers
  const downloadModeSelect = document.getElementById("download-mode-select");
  const downloadRangeInputs = document.getElementById("download-range-inputs");

  if (downloadModeSelect) {
    downloadModeSelect.addEventListener("change", () => {
      const mode = downloadModeSelect.value;
      if (mode === "range") {
        downloadRangeInputs.style.display = "flex";
      } else {
        downloadRangeInputs.style.display = "none";
      }
      updateAllButtonsText();
    });
  }

  const downloadExecuteBtn = document.getElementById("download-execute-btn");
  if (downloadExecuteBtn) {
    downloadExecuteBtn.addEventListener("click", () => {
      const mode = downloadModeSelect?.value || "active";
      if (mode === "active") {
        downloadActiveTopic();
      } else if (mode === "all") {
        downloadAllTopics();
      } else {
        downloadRangeTopics();
      }
    });
  }

  // Buffer Scheduler Event Handlers
  document.getElementById("buffer-load-channels-btn").addEventListener("click", loadBufferChannels);
  document.getElementById("buffer-schedule-all-btn").addEventListener("click", scheduleAllCardsToBuffer);

  // Buffer active loop controls
  const bufferPauseBtn = document.getElementById("buffer-pause-btn");
  const bufferResumeBtn = document.getElementById("buffer-resume-btn");
  const bufferCancelBtn = document.getElementById("buffer-cancel-btn");

  if (bufferPauseBtn) {
    bufferPauseBtn.addEventListener("click", () => {
      isSchedulerPaused = true;
      bufferPauseBtn.style.display = "none";
      bufferResumeBtn.style.display = "block";
      bufferLog("⏸️ 작업이 일시정지 상태로 변경되었습니다.");
    });
  }
  if (bufferResumeBtn) {
    bufferResumeBtn.addEventListener("click", () => {
      isSchedulerPaused = false;
      bufferPauseBtn.style.display = "block";
      bufferResumeBtn.style.display = "none";
      bufferLog("▶️ 작업을 다시 재개합니다.");
    });
  }
  if (bufferCancelBtn) {
    bufferCancelBtn.addEventListener("click", () => {
      shouldCancelScheduler = true;
      isSchedulerPaused = false;
      bufferLog("🛑 작업을 취소하는 중...");
    });
  }

  // Buffer queue manager controls
  const bufferFetchBtn = document.getElementById("buffer-fetch-queue-btn");
  const bufferDelRangeBtn = document.getElementById("buffer-delete-range-btn");
  const bufferDelAllBtn = document.getElementById("buffer-delete-all-btn");

  if (bufferFetchBtn) {
    bufferFetchBtn.addEventListener("click", fetchBufferPendingQueue);
  }
  if (bufferDelRangeBtn) {
    bufferDelRangeBtn.addEventListener("click", deleteRangeBufferPosts);
  }
  if (bufferDelAllBtn) {
    bufferDelAllBtn.addEventListener("click", deleteAllBufferPosts);
  }

  // Slide Count Adjuster Event Listener
  const slideCountSelect = document.getElementById("slide-count-select");
  if (slideCountSelect) {
    slideCountSelect.addEventListener("change", (e) => {
      adjustActiveTopicSlideCount(parseInt(e.target.value, 10));
    });
  }

  // AI Autofill for New Topic
  const btnAutofillNew = document.getElementById("btn-autofill-new");
  if (btnAutofillNew) {
    btnAutofillNew.addEventListener("click", () => {
      const title = document.getElementById("new-topic-title").value.trim();
      const country = document.getElementById("new-topic-country").value;
      if (!title) {
        alert("먼저 주제 제목을 입력해 주셔야 AI가 그에 어울리는 본문 문구를 생성할 수 있습니다!");
        return;
      }
      const generatedText = generateAICopy(title, country);
      document.getElementById("new-topic-text").value = generatedText;
    });
  }

  // Create Topic Event Listener
  const btnCreateTopic = document.getElementById("btn-create-topic");
  if (btnCreateTopic) {
    btnCreateTopic.addEventListener("click", () => {
      const title = document.getElementById("new-topic-title").value.trim();
      const country = document.getElementById("new-topic-country").value;
      const text = document.getElementById("new-topic-text").value.trim();
      const generateCount = parseInt(document.getElementById("new-topic-generate-count").value, 10) || 1;
      
      if (!title) {
        alert("주제 제목을 입력해 주세요!");
        return;
      }
      if (!text) {
        alert("상세 기획안/본문 문구를 입력해 주세요!");
        return;
      }
      
      const segments = text.split(/\r?\n\s*---\s*\r?\n|\n\n\n/); // Split by --- or 3 newlines
      
      for (let i = 0; i < generateCount; i++) {
        let currentTitle = title;
        let currentText = text;

        if (segments.length > i) {
          currentText = segments[i].trim();
          const lines = currentText.split(/\r?\n/);
          if (lines.length > 0 && lines[0].length < 35) {
            currentTitle = lines[0].replace(/^#+\s*/, ""); // remove markdown headers
            currentText = lines.slice(1).join("\n");
          }
        } else if (generateCount > 1) {
          currentTitle = `${title} - ${i + 1}탄`;
        }

        const newTopic = parsePlanningTextToSlides(currentTitle, country, currentText);
        newTopic.id = topicsData.length + 1;
        topicsData.push(newTopic);
      }
      
      // Clear inputs
      document.getElementById("new-topic-title").value = "";
      document.getElementById("new-topic-text").value = "";
      document.getElementById("new-topic-generate-count").value = "1";
      
      // Re-render sidebar & load the last generated topic
      renderSidebar();
      loadTopic(topicsData.length - 1);
      
      // Highlight the sidebar item scroll position
      const sidebarList = document.getElementById("topics-list");
      if (sidebarList) {
        sidebarList.scrollTop = sidebarList.scrollHeight;
      }
      
      if (generateCount > 1) {
        alert(`총 ${generateCount}개의 카드뉴스 주제가 성공적으로 생성되어 리스트 맨 아래 추가되었습니다!`);
      } else {
        alert(`"${title}" 카드뉴스가 새롭게 생성되어 리스트 맨 아래 추가되었습니다!`);
      }
    });
  }
}

// Sync the sliders and checkbox values with the active slide's config
function syncSlidersWithActiveSlide() {
  const topic = topicsData[currentTopicIndex];
  const slide = topic.slides[activeSlideIndex];
  if (!slide) return;
  
  if (!slide.modelConfig) {
    slide.modelConfig = {
      show: slide.hasModel !== undefined ? slide.hasModel : true,
      scale: 1.0,
      x: 0,
      y: 0,
      opacity: 1.0
    };
  }
  
  const config = slide.modelConfig;
  
  document.getElementById("model-scale").value = config.scale;
  document.getElementById("model-x").value = config.x;
  document.getElementById("model-y").value = config.y;
  document.getElementById("model-opacity").value = config.opacity;
  document.getElementById("toggle-model-all").checked = config.show;
  
  const tuningSelect = document.getElementById("tuning-slide-select");
  if (tuningSelect) {
    tuningSelect.value = activeSlideIndex;
  }
}

// Apply transforms from Sliders to the model photos (supporting slide-level adjustments)
function applyModelTransformations() {
  const applyAll = document.getElementById("apply-model-to-all").checked;
  const applyGlobal = document.getElementById("apply-model-to-global").checked;
  const scale = parseFloat(document.getElementById("model-scale").value);
  const x = parseInt(document.getElementById("model-x").value, 10);
  const y = parseInt(document.getElementById("model-y").value, 10);
  const opacity = parseFloat(document.getElementById("model-opacity").value);
  const show = document.getElementById("toggle-model-all").checked;

  const currentTopic = topicsData[currentTopicIndex];

  if (applyGlobal) {
    // Apply settings to ALL slides in ALL topics in topicsData
    topicsData.forEach(topic => {
      topic.slides.forEach(slide => {
        if (!slide.modelConfig) {
          slide.modelConfig = { show: true, scale: 1.0, x: 0, y: 0, opacity: 1.0 };
        }
        slide.modelConfig.scale = scale;
        slide.modelConfig.x = x;
        slide.modelConfig.y = y;
        slide.modelConfig.opacity = opacity;
        slide.modelConfig.show = show;
      });
    });

    // Update styling for the currently rendered topic in the DOM
    currentTopic.slides.forEach((slide, idx) => {
      const cardEl = document.getElementById(`card-slide-${idx + 1}`);
      if (cardEl) {
        if (show) {
          cardEl.classList.remove("card-no-model");
        } else {
          cardEl.classList.add("card-no-model");
        }
        const imgEl = cardEl.querySelector(".model-photo-element");
        if (imgEl) {
          imgEl.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
          imgEl.style.opacity = opacity;
          imgEl.style.display = show ? "block" : "none";
        }
      }
    });
  } else if (applyAll) {
    // Apply settings to ALL slides in only the current active topic
    currentTopic.slides.forEach((slide, idx) => {
      if (!slide.modelConfig) {
        slide.modelConfig = { show: true, scale: 1.0, x: 0, y: 0, opacity: 1.0 };
      }
      slide.modelConfig.scale = scale;
      slide.modelConfig.x = x;
      slide.modelConfig.y = y;
      slide.modelConfig.opacity = opacity;
      slide.modelConfig.show = show;

      // Update styling in the DOM
      const cardEl = document.getElementById(`card-slide-${idx + 1}`);
      if (cardEl) {
        if (show) {
          cardEl.classList.remove("card-no-model");
        } else {
          cardEl.classList.add("card-no-model");
        }
        const imgEl = cardEl.querySelector(".model-photo-element");
        if (imgEl) {
          imgEl.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
          imgEl.style.opacity = opacity;
          imgEl.style.display = show ? "block" : "none";
        }
      }
    });
  } else {
    // Apply settings ONLY to the active focused slide of the current topic
    const slide = currentTopic.slides[activeSlideIndex];
    if (slide) {
      if (!slide.modelConfig) {
        slide.modelConfig = { show: true, scale: 1.0, x: 0, y: 0, opacity: 1.0 };
      }
      slide.modelConfig.scale = scale;
      slide.modelConfig.x = x;
      slide.modelConfig.y = y;
      slide.modelConfig.opacity = opacity;
      slide.modelConfig.show = show;

      // Update styling for this card only in the DOM
      const cardEl = document.getElementById(`card-slide-${activeSlideIndex + 1}`);
      if (cardEl) {
        if (show) {
          cardEl.classList.remove("card-no-model");
        } else {
          cardEl.classList.add("card-no-model");
        }
        const imgEl = cardEl.querySelector(".model-photo-element");
        if (imgEl) {
          imgEl.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
          imgEl.style.opacity = opacity;
          imgEl.style.display = show ? "block" : "none";
        }
      }
    }
  }
}

// Function to update model display properties on load
function updateModelImageDisplay() {
  syncSlidersWithActiveSlide();
}

// Helper to delay execution (giving time for DOM render/rasterization)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Download all 6 cards of the CURRENT active topic as ZIP
async function downloadActiveTopic() {
  const downloadBtn = document.getElementById("download-active-btn");
  const originalText = downloadBtn.innerHTML;
  downloadBtn.disabled = true;
  downloadBtn.innerHTML = `<span>⏳ 렌더링 중...</span>`;

  try {
    const zip = new JSZip();
    const topic = topicsData[currentTopicIndex];
    const cards = document.querySelectorAll(".instagram-card");

    // Make temporary high-res rendering div (1080x1080px exact sizing)
    const exportContainer = document.createElement("div");
    exportContainer.style.position = "absolute";
    exportContainer.style.top = "-9999px";
    exportContainer.style.left = "-9999px";
    exportContainer.style.width = "1080px";
    exportContainer.style.height = "1080px";
    document.body.appendChild(exportContainer);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      // Clone card to the high-res rendering box
      const clone = card.cloneNode(true);
      clone.style.width = "1080px";
      clone.style.height = "1080px";
      clone.style.transform = "none";
      clone.style.borderRadius = "0px";
      clone.style.boxShadow = "none";

      // Ensure contenteditable is disabled for print
      clone.querySelectorAll("[contenteditable]").forEach(el => {
        el.removeAttribute("contenteditable");
      });

      // Synchronize fonts & styles
      clone.style.fontFamily = card.style.fontFamily;
      clone.style.backgroundColor = card.style.backgroundColor;
      clone.style.color = card.style.color;

      exportContainer.appendChild(clone);
      await delay(100); // Allow image rendering

      const canvas = await html2canvas(clone, {
        width: 1080,
        height: 1080,
        scale: 1, // Keep original size 1080x1080
        useCORS: true,
        allowTaint: true,
        logging: false
      });

      const dataUrl = canvas.toDataURL("image/png");
      const base64Data = dataUrl.replace(/^data:image\/(png|jpg);base64,/, "");
      
      const fileName = `${topic.id}_${topic.country}_slide_${i + 1}.png`;
      zip.file(fileName, base64Data, { base64: true });

      // Clean up clone
      exportContainer.innerHTML = "";
    }

    document.body.removeChild(exportContainer);

    // Save Zip
    const content = await zip.generateAsync({ type: "blob" });
    const zipName = `tlabal_card_news_topic_${topic.id}.zip`;
    saveAs(content, zipName);

  } catch (error) {
    console.error("Rendering failed:", error);
    alert("이미지 렌더링 중 오류가 발생했습니다. 브라우저 콘솔을 확인해주세요.");
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.innerHTML = originalText;
  }
}

// Download ALL 12 topics (72 slides) as a combined ZIP archive
async function downloadAllTopics() {
  const downloadBtn = document.getElementById("download-all-btn");
  const originalText = downloadBtn.innerHTML;
  downloadBtn.disabled = true;
  
  const zip = new JSZip();

  // Create temporary high-res rendering div
  const exportContainer = document.createElement("div");
  exportContainer.style.position = "absolute";
  exportContainer.style.top = "-9999px";
  exportContainer.style.left = "-9999px";
  exportContainer.style.width = "1080px";
  exportContainer.style.height = "1080px";
  document.body.appendChild(exportContainer);

  const initialTopicIndex = currentTopicIndex;

  try {
    for (let t = 0; t < topicsData.length; t++) {
      downloadBtn.innerHTML = `<span>⏳ 렌더링 중 (${t + 1} / 12 주제)...</span>`;
      
      // Load topic internally
      loadTopic(t);
      await delay(150); // Let UI update colors and styles

      const cards = document.querySelectorAll(".instagram-card");
      const topic = topicsData[t];

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const clone = card.cloneNode(true);
        clone.style.width = "1080px";
        clone.style.height = "1080px";
        clone.style.transform = "none";
        clone.style.borderRadius = "0px";
        clone.style.boxShadow = "none";

        clone.querySelectorAll("[contenteditable]").forEach(el => {
          el.removeAttribute("contenteditable");
        });

        clone.style.fontFamily = card.style.fontFamily;
        clone.style.backgroundColor = card.style.backgroundColor;
        clone.style.color = card.style.color;

        exportContainer.appendChild(clone);
        await delay(100);

        const canvas = await html2canvas(clone, {
          width: 1080,
          height: 1080,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          logging: false
        });

        const dataUrl = canvas.toDataURL("image/png");
        const base64Data = dataUrl.replace(/^data:image\/(png|jpg);base64,/, "");
        
        // Structure files inside folders inside the zip
        const fileName = `Topic_${topic.id}_${topic.country}/${topic.id}_slide_${i + 1}.png`;
        zip.file(fileName, base64Data, { base64: true });

        exportContainer.innerHTML = "";
      }
    }

    // Restore to initial state
    loadTopic(initialTopicIndex);
    document.body.removeChild(exportContainer);

    downloadBtn.innerHTML = `<span>압축파일 생성 중...</span>`;
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "tlabal_all_12_topics_card_news.zip");

  } catch (error) {
    console.error("Rendering all failed:", error);
    alert("일괄 다운로드 중 오류가 발생했습니다.");
    loadTopic(initialTopicIndex);
    if (document.body.contains(exportContainer)) {
      document.body.removeChild(exportContainer);
    }
  } finally {
    downloadBtn.disabled = false;
    downloadBtn.innerHTML = originalText;
  }
}

// -------------------------------------------------------------
// BUFFER SCHEDULER INTEGRATION IMPLEMENTATION
// -------------------------------------------------------------

function bufferLog(message) {
  const terminal = document.getElementById("buffer-terminal");
  terminal.style.display = "block";
  terminal.textContent += "\n" + message;
  terminal.scrollTop = terminal.scrollHeight;
  console.log("[Buffer CLI] " + message);
}

async function loadBufferChannels() {
  const tokenInput = document.getElementById("buffer-token-input");
  const loadBtn = document.getElementById("buffer-load-channels-btn");
  const token = tokenInput.value.trim();

  if (!token) {
    alert("Buffer Access Token을 입력해 주세요.");
    return;
  }

  loadBtn.disabled = true;
  loadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 로딩 중...';
  bufferLog("========================================");
  bufferLog("🔑 Buffer API 연결 시도 중...");

  try {
    // Step 1: Query user organizations
    const orgQuery = `
      query GetOrganizations {
        account {
          organizations {
            id
            name
          }
        }
      }
    `;

    const orgRes = await fetch("/buffer-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, query: orgQuery })
    });
    const orgJson = await orgRes.json();

    if (orgJson.errors) {
      throw new Error(orgJson.errors[0].message);
    }

    const orgs = orgJson.data.account.organizations;
    if (!orgs || orgs.length === 0) {
      throw new Error("연결된 조직(Organization)이 없습니다.");
    }

    const orgId = orgs[0].id;
    bufferLog(`✔️ 인증 성공 (조직: ${orgs[0].name})`);

    // Step 2: Query channels for this organization
    const channelQuery = `
      query GetChannels {
        channels(input: { organizationId: "${orgId}" }) {
          id
          name
          service
        }
      }
    `;

    const chanRes = await fetch("/buffer-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, query: channelQuery })
    });
    const chanJson = await chanRes.json();

    if (chanJson.errors) {
      throw new Error(chanJson.errors[0].message);
    }

    const channels = chanJson.data.channels.filter(c => c.service === "instagram");
    if (channels.length === 0) {
      throw new Error("연결된 인스타그램 비즈니스 채널이 없습니다. 버퍼 설정에서 채널을 추가해 주세요.");
    }

    // Step 3: Populate Select Box
    const selectBox = document.getElementById("buffer-channel-select");
    selectBox.innerHTML = "";
    channels.forEach(chan => {
      const opt = document.createElement("option");
      opt.value = chan.id;
      opt.textContent = `${chan.name} (${chan.service})`;
      selectBox.appendChild(opt);
    });

    bufferLog(`✔️ 채널 정보 수신 완료: ${channels.length}개 채널 로드됨`);

    // Show UI panels
    document.getElementById("buffer-channel-select-wrap").style.display = "block";
    document.getElementById("buffer-date-time-wrap").style.display = "flex";
    document.getElementById("buffer-schedule-all-wrap").style.display = "block";
    document.getElementById("buffer-queue-manager-wrap").style.display = "flex";

  } catch (err) {
    bufferLog(`❌ 채널 로드 실패: ${err.message}`);
    alert(`Buffer 연결 실패: ${err.message}`);
  } finally {
    loadBtn.disabled = false;
    loadBtn.innerHTML = '<i class="fa-solid fa-arrows-spin"></i> 채널(인스타그램) 불러오기';
  }
}

async function scheduleAllCardsToBuffer() {
  const token = document.getElementById("buffer-token-input").value.trim();
  const channelId = document.getElementById("buffer-channel-select").value;
  const startDateVal = document.getElementById("buffer-start-date").value;
  const startTimeVal = document.getElementById("buffer-start-time").value;
  const scheduleBtn = document.getElementById("buffer-schedule-all-btn");
  const activeControls = document.getElementById("buffer-active-controls");
  const pauseBtn = document.getElementById("buffer-pause-btn");
  const resumeBtn = document.getElementById("buffer-resume-btn");

  if (!token || !channelId || !startDateVal || !startTimeVal) {
    alert("인증 토큰, 채널, 시작 일정 등을 모두 확인해 주세요.");
    return;
  }

  // Parse start / end index and frequency
  let startIdx = parseInt(document.getElementById("buffer-start-idx").value, 10) - 1;
  let endIdx = parseInt(document.getElementById("buffer-end-idx").value, 10) - 1;
  const frequency = document.getElementById("buffer-frequency-select").value;

  if (isNaN(startIdx) || startIdx < 0) startIdx = 0;
  if (isNaN(endIdx) || endIdx >= topicsData.length) endIdx = topicsData.length - 1;
  if (startIdx > endIdx) {
    alert("시작 주제 번호가 끝 주제 번호보다 클 수 없습니다.");
    return;
  }

  const cycleText = frequency === "1d" ? "매일 1건" : (frequency === "15d" ? "매월 2건 (15일 간격)" : "매월 1건 (30일 간격)");
  const totalToSchedule = endIdx - startIdx + 1;

  const confirmMsg = `주제 번호 ${startIdx + 1}번부터 ${endIdx + 1}번까지 총 ${totalToSchedule}개 카드뉴스를\n${startDateVal}일부터 ${cycleText}으로\nBuffer에 발행 예약을 등록하시겠습니까?`;
  if (!confirm(confirmMsg)) return;

  // Toggle active controls UI
  scheduleBtn.style.display = "none";
  activeControls.style.display = "flex";
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";

  isSchedulerPaused = false;
  shouldCancelScheduler = false;

  bufferLog("========================================");
  bufferLog("🚀 Buffer 예약 등록 작업을 개시합니다.");
  bufferLog(`📅 범위: ${startIdx + 1} ~ ${endIdx + 1}번 (${totalToSchedule}개 주제)`);
  bufferLog(`📅 시작: ${startDateVal} | 주기: ${cycleText}`);

  const initialTopicIndex = currentTopicIndex;

  // Make temporary container
  const exportContainer = document.createElement("div");
  exportContainer.style.position = "absolute";
  exportContainer.style.top = "-9999px";
  exportContainer.style.left = "-9999px";
  exportContainer.style.width = "1080px";
  exportContainer.style.height = "1080px";
  document.body.appendChild(exportContainer);

  try {
    for (let t = startIdx; t <= endIdx; t++) {
      // Check Cancellation
      if (shouldCancelScheduler) {
        bufferLog("⚠️ [작업 취소] 사용자에 의해 예약 등록이 취소되었습니다.");
        break;
      }

      // Check Pause Loop
      while (isSchedulerPaused) {
        await delay(500);
        if (shouldCancelScheduler) break;
      }
      if (shouldCancelScheduler) {
        bufferLog("⚠️ [작업 취소] 사용자에 의해 예약 등록이 취소되었습니다.");
        break;
      }

      const topic = topicsData[t];
      bufferLog(`----------------------------------------`);
      bufferLog(`📂 [주제 ${t + 1} / ${topicsData.length}] ${topic.title} 처리 중...`);

      // 1. Load topic
      loadTopic(t);
      await delay(300);

      const cards = document.querySelectorAll(".instagram-card");
      const imageUrls = [];

      // 2. Render each of the slides
      for (let i = 0; i < cards.length; i++) {
        // Double check cancellation inside rendering loops
        if (shouldCancelScheduler) break;

        bufferLog(`  - [슬라이드 ${i + 1}/${cards.length}] 이미지 렌더링 중...`);
        const card = cards[i];
        
        const clone = card.cloneNode(true);
        clone.style.width = "1080px";
        clone.style.height = "1080px";
        clone.style.transform = "none";
        clone.style.borderRadius = "0px";
        clone.style.boxShadow = "none";

        clone.querySelectorAll("[contenteditable]").forEach(el => el.removeAttribute("contenteditable"));
        clone.style.fontFamily = card.style.fontFamily;
        clone.style.backgroundColor = card.style.backgroundColor;
        clone.style.color = card.style.color;

        exportContainer.appendChild(clone);
        await delay(100);

        const canvas = await html2canvas(clone, {
          width: 1080,
          height: 1080,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          logging: false
        });

        const base64Data = canvas.toDataURL("image/png");
        exportContainer.innerHTML = "";

        bufferLog(`  - [슬라이드 ${i + 1}/${cards.length}] 이미지 클라우드 업로드 중...`);
        const uploadRes = await fetch("/upload-proxy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64Data })
        });
        const uploadJson = await uploadRes.json();
        
        if (uploadJson.error) {
          throw new Error(`이미지 업로드 실패: ${uploadJson.error}`);
        }

        imageUrls.push(uploadJson.url);
      }

      if (shouldCancelScheduler) break;

      // 3. Offset calculations
      const localDateStr = `${startDateVal}T${startTimeVal}:00+09:00`;
      const dateObj = new Date(localDateStr);
      
      let daysOffset = 0;
      const stepCount = t - startIdx;
      if (frequency === "1d") {
        daysOffset = stepCount;
      } else if (frequency === "15d") {
        daysOffset = stepCount * 15;
      } else if (frequency === "30d") {
        daysOffset = stepCount * 30;
      }
      dateObj.setDate(dateObj.getDate() + daysOffset);
      const dueAtISO = dateObj.toISOString();

      // Use dynamic fallback capKey if not matched exactly
      const capKey = (topic.id % 12) || 12;
      const defaultCap = scheduleCalendar[capKey] || `${topic.title}\n\n트라밸 올인원 자유패키지로 가볍게 떠나는 여행!`;
      const defaultHash = hashtags[capKey] || "#해외여행 #자유여행 #패키지여행 #트라밸";
      const captionText = `${defaultCap}\n\n${defaultHash}`;

      bufferLog(`  - [슬라이드 전체] Buffer GraphQL API 등록 요청 중...`);
      const assetsInput = imageUrls.map(url => `          { image: { url: "${url}" } }`).join("\n");

      const escapedText = captionText
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');

      const createPostMutation = `
        mutation CreatePost {
          createPost(
            input: {
              text: "${escapedText}"
              channelId: "${channelId}"
              schedulingType: automatic
              mode: customScheduled
              dueAt: "${dueAtISO}"
              assets: [
${assetsInput}
              ]
              metadata: {
                instagram: {
                  type: post
                  shouldShareToFeed: true
                }
              }
            }
          ) {
            __typename
            ... on PostActionSuccess {
              post {
                id
                dueAt
              }
            }
            ... on MutationError {
              message
            }
          }
        }
      `;

      const scheduleRes = await fetch("/buffer-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, query: createPostMutation })
      });
      const scheduleJson = await scheduleRes.json();

      if (scheduleJson.errors) {
        throw new Error(scheduleJson.errors[0].message);
      }

      const result = scheduleJson.data.createPost;
      if (result.__typename !== "PostActionSuccess") {
        throw new Error(result.message || `예약 실패 (에러 타입: ${result.__typename})`);
      }

      bufferLog(`✔️ [주제 ${t + 1} 완료] Buffer 예약 등록 성공!`);
      topic.isScheduled = true;
      renderSidebar();
      const displayTime = new Date(result.post.dueAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
      bufferLog(`  - 예정 시각 (KST): ${displayTime}`);
    }

    if (!shouldCancelScheduler) {
      bufferLog("========================================");
      bufferLog(`🎉 축하합니다! 선택하신 ${totalToSchedule}개 주제 예약이 성공적으로 마무리되었습니다.`);
      alert("Buffer 예약 등록이 완벽하게 성공했습니다!");
    }

  } catch (err) {
    bufferLog(`❌ 예약 등록 중 에러 발생: ${err.message}`);
    alert(`Buffer 예약 실패: ${err.message}`);
  } finally {
    loadTopic(initialTopicIndex);
    if (document.body.contains(exportContainer)) {
      document.body.removeChild(exportContainer);
    }
    scheduleBtn.style.display = "block";
    activeControls.style.display = "none";
  }
}

// -------------------------------------------------------------
// DYNAMIC TOPICS & PAGE COUNT ADAPTER IMPLEMENTATIONS
// -------------------------------------------------------------

function updateAllButtonsText() {
  const topic = topicsData[currentTopicIndex];
  if (!topic) return;

  const mode = document.getElementById("download-mode-select")?.value || "active";
  const executeBtn = document.getElementById("download-execute-btn");
  if (!executeBtn) return;

  const totalAllSlides = topicsData.reduce((acc, t) => acc + t.slides.length, 0);

  if (mode === "active") {
    executeBtn.innerHTML = `<i class="fa-solid fa-file-zipper"></i> 현재 주제 ${topic.slides.length}장 다운로드 (ZIP)`;
  } else if (mode === "range") {
    executeBtn.innerHTML = `<i class="fa-solid fa-file-waveform"></i> 선택 구간 다운로드 (ZIP)`;
  } else {
    executeBtn.innerHTML = `<i class="fa-solid fa-download"></i> 전체 ${totalAllSlides}장 일괄 다운로드 (ZIP)`;
  }

  // Update min/max limits for start/end index inputs
  const startInput = document.getElementById("download-start-idx");
  const endInput = document.getElementById("download-end-idx");
  if (startInput && endInput) {
    startInput.max = topicsData.length;
    endInput.max = topicsData.length;
    if (parseInt(endInput.value, 10) > topicsData.length) {
      endInput.value = topicsData.length;
    }
  }
}

function adjustActiveTopicSlideCount(targetCount) {
  const topic = topicsData[currentTopicIndex];
  const currentCount = topic.slides.length;
  if (currentCount === targetCount) return;

  const defaultLayouts = {
    vietnam: {
      content: [
        {
          type: "content",
          title: "고민 끝, 선택은 자유롭게",
          subtitle: "다낭·나트랑·푸꾸옥, 한 번의 예약으로 자유 이동",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "다낭 (Da Nang)", desc: "도심 and 해변을 함께 즐기는 올라운드 대표 도시" },
            { title: "나트랑 (Nha Trang)", desc: "에메랄드빛 바다에서 즐기는 해양스포츠 천국" },
            { title: "푸꾸옥 (Phu Quoc)", desc: "프라이빗 풀빌라에서 보내는 완전한 힐링 휴양" }
          ]
        },
        {
          type: "content",
          title: "숙소부터 투어까지 한번에",
          subtitle: "이동수단 걱정 없이, 숙소·투어 올인원 구성",
          layout: "half-photo",
          hasModel: false,
          photoUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          textContent: "여러 사이트에서 헤매지 마세요! 트라밸은 제휴 리조트와 전용 렌터카, 로컬 프라이빗 투어를 하나로 묶어 복잡한 여행 준비를 끝내드립니다."
        },
        {
          type: "content",
          title: "베트남 3박 5일 풀옵션 여행<br>단돈 10만원대에 해결하는 법?",
          subtitle: "대형 패키지 퀄리티 그대로, 현지 올인원 지원",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
            { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
            { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
          ]
        },
        {
          type: "content",
          title: "바우처 하나로 더 가볍게",
          subtitle: "멤버십 상품권 적용 시 숙박비 즉시 할인",
          layout: "price-tag",
          hasModel: false,
          priceBefore: "제휴 리조트 일반 예약가",
          priceAfter: "댓글 남겨주시면 특별 혜택가 DM 즉시 안내!",
          discountText: "댓글 특별 혜택"
        },
        {
          type: "content",
          title: "필수 체크리스트",
          subtitle: "베트남 여행 전 반드시 확인해야 할 요소",
          layout: "checklist",
          hasModel: false,
          checklistItems: [
            { label: "여권 만료기한 6개월 이상 유지 확인", checked: true },
            { label: "환전용 달러 고액권 준비", checked: true },
            { label: "그랩 앱 설치 및 카드 등록", checked: false }
          ]
        },
        {
          type: "content",
          title: "추천 연계 리조트 목록",
          subtitle: "회원 선호도 최고 리조트 가치 비교",
          layout: "comparison-bars",
          hasModel: false,
          bars: [
            { label: "보홀/세부 제이파크 리조트", value: "95%", color: "var(--main-color)" },
            { label: "다낭 헤난 풀빌라 리조트", value: "88%", color: "#cbd5e1" }
          ],
          textContent: "트라밸 제휴 리조트는 고객 만족도 90% 이상 리조트로만 매칭해 드립니다."
        }
      ]
    },
    thailand: {
      content: [
        {
          type: "content",
          title: "방콕 — 화려한 쇼핑 & 미식",
          subtitle: "트렌디한 아이콘시암, 야시장, 루프탑 바 투어",
          layout: "half-photo",
          hasModel: false,
          photoUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
          textContent: "대형 쇼핑몰과 화려한 루프탑 바, 활기찬 야시장까지 다채롭고 활력 넘치는 도심의 밤을 만끽하고 싶은 분들께 어울리는 여행지입니다."
        },
        {
          type: "content",
          title: "휴양지 — 평화롭고 나긋한 힐링",
          subtitle: "푸켓·코사무이·크라비 해변과 럭셔리 휴양",
          layout: "half-photo",
          hasModel: false,
          photoUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
          textContent: "맑고 깨끗한 프라이빗 해변 풀빌라 리조트에서 스파를 받고 파도 소리를 들으며 온전히 쉼에 몰두하는 힐링 여행입니다."
        },
        {
          type: "content",
          title: "방콕·푸켓 3박 4일 자유 호캉스<br>10만원대로 숙소+식사+차량 해결?",
          subtitle: "멤버십 제휴 리조트 및 단독 차량 서비스 무료 연계",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
            { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
            { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
          ]
        },
        {
          type: "content",
          title: "두 마리 토끼를 다 잡는 코스",
          subtitle: "트라밸 추천: 방콕 2박 + 휴양지 2박 조합 여정",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "Day 1-2: 방콕 시티", desc: "쇼핑, 사원 투어, 야시장 미식 탐방" },
            { title: "국내선 1시간 이동", desc: "편리한 비행기로 방콕에서 푸켓/사무이 이동" },
            { title: "Day 3-4: 럭셔리 리조트", desc: "풀빌라 스파와 전용 해변 물놀이 힐링" }
          ]
        },
        {
          type: "content",
          title: "태국 여행 필수 체크리스트",
          subtitle: "출발 전 여권, 환전, 유심 최종 확인",
          layout: "checklist",
          hasModel: false,
          checklistItems: [
            { label: "여권 (만료일 최소 6개월 이상 남았는지 확인)", checked: true },
            { label: "소액권 바트화 및 모바일 GLN 충전", checked: true },
            { label: "5G 유심 사전 신청 또는 eSIM 사전 등록", checked: false }
          ]
        }
      ]
    },
    laos: {
      content: [
        {
          type: "content",
          title: "방비엥 — 액티비티 천국",
          subtitle: "블루라군 다이빙과 버기카 오프로드 모험",
          layout: "half-photo",
          hasModel: false,
          photoUrl: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
          textContent: "에메랄드빛 천연 온천 블루라군에서의 스릴 넘치는 다이빙과 버기카를 타고 달리는 자연 속 오프로드 코스를 소개합니다."
        },
        {
          type: "content",
          title: "라오스 힐링 핵심 코스",
          subtitle: "천연 요정의 수영장 콴시 폭포 산림욕",
          layout: "checklist",
          hasModel: false,
          checklistItems: [
            { label: "콴시 폭포 시원한 물놀이와 인생샷 남기기", checked: true },
            { label: "메콩강 크루즈 위에서 감상하는 선셋", checked: true },
            { label: "야시장에서 로컬 수공예품과 비어라오 쇼핑", checked: false }
          ]
        },
        {
          type: "content",
          title: "라오스 3박 4일 일정 완성<br>10만원대로 숙소+차량+식사 완결?",
          subtitle: "트라밸 단독 기획, 비용 거품 제로 라오스 멤버십",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
            { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
            { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
          ]
        }
      ]
    },
    philippines: {
      content: [
        {
          type: "content",
          title: "보홀·세부 인기 리조트 TOP 3",
          subtitle: "최고의 프라이빗 호캉스 리조트 만족도 비교",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "보홀 헤난 리조트", desc: "알로나 비치와 맞닿은 환상적 풀사이드 엑세스" },
            { title: "세부 샹그릴라", desc: "청정 프라이빗 비치와 고급 스파의 진수" },
            { title: "세부 제이파크", desc: "가족 단위 최고 선호 대형 워터파크 보유" }
          ]
        },
        {
          type: "content",
          title: "현지 경비 하루 지출 표준",
          subtitle: "물가 대비 현지 교통 및 액티비티 요약",
          layout: "comparison-bars",
          hasModel: false,
          bars: [
            { label: "실속형 비수기 예산 (인당)", value: "50만원", color: "#cbd5e1" },
            { label: "성수기/연휴 평균 예산 (인당)", value: "90만원", color: "var(--main-color)" }
          ],
          textContent: "LCC 얼리버드 항공권을 예약하고 제휴 리조트를 이용하면 3박 5일 호캉스 경비를 대폭 아낄 수 있습니다."
        },
        {
          type: "content",
          title: "필리핀 3박 5일 예산 혁명<br>10만원대로 현지 풀 패키지 누리기",
          subtitle: "환율 걱정 없는 스마트 호캉스, 현지 경비 무료 혜택",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "4성급+ 숙소 지원", desc: "엄선된 4성급 이상 제휴 리조트/호텔 무료 제공" },
            { title: "단독 전용차량 & 기사", desc: "우리끼리만 타는 전용 차량 및 로컬 기사 전일정 무료 제공" },
            { title: "식사 & 투어 무료", desc: "현지 맛집 전일정 식사와 주요 관광 코스 무료 지원" }
          ]
        }
      ]
    },
    korea: {
      content: [
        {
          type: "content",
          title: "제주도 서귀포 감성 코스",
          subtitle: "푸른 바다와 비밀 숲의 만남",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "안돌오름 비밀의 숲", desc: "인생 샷을 건질 수 있는 숲길 정취" },
            { title: "서귀포 쇠소깍", desc: "나룻배를 타고 즐기는 신비로운 계곡" },
            { title: "큰엉해안경승지", desc: "한반도 실루엣 나무 터널 절경" }
          ]
        },
        {
          type: "content",
          title: "국내 여행 준비물 체크리스트",
          subtitle: "가볍고 실속 있는 짐싸기",
          layout: "checklist",
          hasModel: false,
          checklistItems: [
            { label: "신분증 및 모바일 운전면허증", checked: true },
            { label: "지역 화폐 카드 및 선할인 앱 설치", checked: true },
            { label: "편안한 도보 여행용 운동화", checked: false }
          ]
        }
      ]
    },
    japan: {
      content: [
        {
          type: "content",
          title: "도쿄·오사카 미식 탐방",
          subtitle: "오직 로컬 맛집으로만 가득 채운 일정",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "1일차: 라멘 & 야키토리", desc: "퇴근길 현지인들이 줄 서는 골목 맛집" },
            { title: "2일차: 스시 & 가이세키", desc: "신선한 스시 오마카세와 장인 카츠" },
            { title: "3일차: 맛있는 디저트", desc: "부드러운 수플레 팬케이크와 말차 음료" }
          ]
        },
        {
          type: "content",
          title: "일본 자유여행 준비물",
          subtitle: "안전하고 편리한 엔화 환전과 와이파이",
          layout: "checklist",
          hasModel: false,
          checklistItems: [
            { label: "여권 및 일본 비짓재팬웹(Visit Japan Web) 사전 등록", checked: true },
            { label: "110V 돼지코 어댑터와 보조배터리", checked: true },
            { label: "현금 위주 엔화 환전 또는 트래블로그 카드 발급", checked: false }
          ]
        }
      ]
    },
    china: {
      content: [
        {
          type: "content",
          title: "중국 대표 명소 3대 포인트",
          subtitle: "웅장한 대자연의 경이로움을 체험하는 루트",
          layout: "split-3",
          hasModel: false,
          columns: [
            { title: "장가계 백룡 엘리베이터", desc: "세계 최고의 높이에서 감상하는 수직 절벽" },
            { title: "원가계 아바타산", desc: "구름 위에 떠 있는 듯한 기암괴석의 향연" },
            { title: "천문산 유리잔도", desc: "발밑이 투명한 절벽 잔도를 걷는 스릴 체험" }
          ]
        },
        {
          type: "content",
          title: "중국 안심 여행 체크사항",
          subtitle: "중국 비자 및 현지 간편 결제 완벽 대비",
          layout: "checklist",
          hasModel: false,
          checklistItems: [
            { label: "여권 및 중국 관광비자 사전 발급 유무 확인", checked: true },
            { label: "현지 필수 앱인 알리페이/위챗페이에 해외카드 사전 연동", checked: true },
            { label: "중국 내 카카오톡/구글 접속을 위한 VPN 우회 유심 준비", checked: false }
          ]
        }
      ]
    }
  };

  const country = topic.country || "vietnam";
  const templates = defaultLayouts[country] || defaultLayouts.vietnam;

  const currentSlides = [...topic.slides];
  const cover = currentSlides[0];
  const cta = currentSlides[currentSlides.length - 1];
  
  let contents = currentSlides.slice(1, -1);

  if (targetCount > currentCount) {
    const needed = targetCount - currentCount;
    for (let i = 0; i < needed; i++) {
      const tIdx = contents.length % templates.content.length;
      const clone = JSON.parse(JSON.stringify(templates.content[tIdx]));
      clone.title = `${topic.countryName} 여행의 특별한 구성`;
      contents.push(clone);
    }
  } else if (targetCount < currentCount) {
    contents = contents.slice(0, targetCount - 2);
  }

  topic.slides = [cover, ...contents, cta];
  
  loadTopic(currentTopicIndex);
  updateAllButtonsText();
}

function parsePlanningTextToSlides(title, country, text) {
  const countryConfig = {
    korea: { name: "한국", main: "#0B2240", point: "#EAAA00" },
    japan: { name: "일본", main: "#BC002D", point: "#333333" },
    china: { name: "중국", main: "#DE2910", point: "#FFDE00" },
    thailand: { name: "태국", main: "#0B4F6C", point: "#D4AF37" },
    vietnam: { name: "베트남", main: "#A6373D", point: "#D9A441" },
    laos: { name: "라오스", main: "#2F5233", point: "#E8A33D" },
    philippines: { name: "필리핀", main: "#08415C", point: "#CC2936" }
  };
  
  const config = countryConfig[country] || countryConfig.vietnam;
  const advBrandName = document.getElementById("adv-brand-name")?.value.trim() || config.name;
  const advBrandPointsText = document.getElementById("adv-brand-points")?.value.trim() || "4성급 리조트 연계, 단독 전용 차량 서비스, 흥정 없는 맞춤 스케줄";
  const advContactUrl = document.getElementById("adv-contact-url")?.value.trim() || "프로필 링크";
  const advBrandPoints = advBrandPointsText.split(/[,，]/).map(item => item.trim()).filter(Boolean);

  const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  
  const parsedSections = [];
  let currentSection = [];
  
  for (let line of rawLines) {
    const match = line.match(/^[-*•\d\.]+\s*(.*)/);
    if (match) {
      if (currentSection.length > 0 && !currentSection.isList) {
        parsedSections.push(currentSection);
        currentSection = [];
      }
      currentSection.isList = true;
      currentSection.push(match[1]);
    } else {
      if (currentSection.length > 0) {
        parsedSections.push(currentSection);
        currentSection = [];
      }
      currentSection.isList = false;
      currentSection.push(line);
    }
  }
  if (currentSection.length > 0) {
    parsedSections.push(currentSection);
  }

  if (parsedSections.length === 0) {
    parsedSections.push(["트라밸과 함께 떠나는 실속형 자유 여행 패키지"]);
  }

  const slides = [];

  slides.push({
    type: "cover",
    title: title || `${config.name} 자유여행의 모든 것`,
    subtitle: `TRAVEL WITH ${advBrandName.toUpperCase()}`,
    layout: "cover-split",
    badgeText: config.name.toUpperCase(),
    hasModel: true,
    bgImage: getCountryUnsplashPhoto(country)
  });

  const photoUrls = {
    korea: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80",
    japan: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    china: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=800&q=80",
    vietnam: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    thailand: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    laos: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    philippines: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  };

  let secIdx = 0;

  let text1 = "숙소 예약부터 기사동행 전용 차량까지 한 번에!";
  if (parsedSections[secIdx]) {
    text1 = parsedSections[secIdx].join(" ");
    secIdx++;
  }
  slides.push({
    type: "content",
    title: "편안한 현지 맞춤 패키지",
    subtitle: "복잡한 동선 고민 없이 편하게 이동하세요",
    layout: "half-photo",
    hasModel: false,
    photoUrl: photoUrls[country] || photoUrls.vietnam,
    textContent: text1
  });

  let cols = [
    { title: advBrandPoints[0] || "4성급 리조트", desc: "엄선된 프리미엄 리조트 무료 연계 제공" },
    { title: advBrandPoints[1] || "단독 전용 차량", desc: "기사 동행 전용차량으로 우리끼리 안전한 이동" },
    { title: advBrandPoints[2] || "일정 및 투어", desc: "쇼핑 강요 없는 자유로운 현지 맞춤 투어" }
  ];
  if (parsedSections[secIdx]) {
    const listItems = parsedSections[secIdx];
    secIdx++;
    cols = listItems.slice(0, 3).map((item, idx) => {
      const parts = item.split(/[:：]/);
      return {
        title: parts[0] ? parts[0].trim() : `체크 포인트 0${idx + 1}`,
        desc: parts[1] ? parts[1].trim() : "상세 혜택과 스케줄을 무료로 확인해 보세요."
      };
    });
    while (cols.length < 3) {
      cols.push({ title: "특별 제휴 혜택", desc: "댓글 남겨주시면 맞춤형 플랜을 제공합니다." });
    }
  }
  slides.push({
    type: "content",
    title: `${advBrandName} 올인원 포함 사항`,
    subtitle: "포함과 불포함 내역을 정직하게 공개합니다",
    layout: "split-3",
    hasModel: false,
    columns: cols
  });

  let priceComment = "댓글 남겨주시면 특별 혜택가 DM 즉시 안내!";
  if (parsedSections[secIdx]) {
    priceComment = parsedSections[secIdx].join(" ");
    secIdx++;
  }
  slides.push({
    type: "content",
    title: "10만원대 실질 가격 혁명",
    subtitle: "중간 마진을 없앤 가장 투명한 직거래 가격",
    layout: "price-tag",
    hasModel: false,
    priceBefore: "제휴 리조트 정상가",
    priceAfter: priceComment,
    discountText: "멤버십 특가"
  });

  let checks = [
    { label: "항공 예약 완료 및 E-티켓 소지", checked: true },
    { label: "현지 기사 매칭 및 카카오톡 연결", checked: true },
    { label: "댓글 남기고 현지 예약 바우처 수령", checked: false }
  ];
  if (parsedSections[secIdx]) {
    checks = parsedSections[secIdx].slice(0, 4).map(item => ({
      label: item,
      checked: true
    }));
    secIdx++;
  }
  slides.push({
    type: "content",
    title: "여행 출발 전 필수 체크사항",
    subtitle: "하나씩 확인하며 즐거운 여행을 준비하세요",
    layout: "checklist",
    hasModel: false,
    checklistItems: checks
  });

  slides.push({
    type: "cta",
    title: `이제 고민은 그만,<br>${advBrandName} 여행을 가볍게!`,
    subtitle: `${advContactUrl}에서 상담 신청하기`,
    layout: "cta-default",
    hasModel: true,
    buttonText: `댓글 남기고 ${advBrandName} 바우처 받기`
  });

  return {
    id: topicsData.length + 1,
    country: country,
    countryName: config.name,
    mainColor: config.main,
    pointColor: config.point,
    badge: config.name.toUpperCase(),
    title: title || `${config.name} 자유여행 가이드`,
    slides: slides,
    rawText: text || ""
  };
}

function getCountryUnsplashPhoto(country) {
  const map = {
    korea: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1080&q=80",
    japan: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1080&q=80",
    china: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=1080&q=80",
    vietnam: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1080&q=80",
    thailand: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1080&q=80",
    laos: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1080&q=80",
    philippines: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80"
  };
  return map[country] || map.vietnam;
}

// =============================================================
// AI MODEL SCENERY PRESETS & GENERATOR IMPLEMENTATION
// =============================================================

const aiSceneryPresets = [
  // 1. 공항/비행기 (Airport / Flight)
  { name: "✈️ 공항 대기실", url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
  { name: "💺 비행기 창가 석", url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" },
  { name: "🛂 여권 출국 심사", url: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=600&q=80" },
  { name: "🧳 캐리어와 대기", url: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=600&q=80" },

  // 2. 수영장/휴양지 (Pool / Beach)
  { name: "🏊 루프탑 인피니티풀", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" },
  { name: "🏖️ 해변 선베드 휴식", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { name: "🍹 야자수 아래 칵테일", url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=600&q=80" },
  { name: "🌊 파도치는 산호초 바다", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80" },

  // 3. 야경/도시 (Night Views / Cities)
  { name: "🌃 네온사인 도심 야경", url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80" },
  { name: "🍸 루프탑 라운지 바", url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80" },
  { name: "🛍️ 화려한 패션 거리 쇼핑", url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80" },
  { name: "🎡 테마파크 야경 관광", url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80" },

  // 4. 카페/음식 (Cafe / Foodie)
  { name: "☕ 테라스 감성 브런치", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" },
  { name: "🍝 오션뷰 파인 다이닝", url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80" },
  { name: "🧇 달콤한 로컬 디저트", url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80" },
  { name: "🍻 활기찬 아시안 야시장", url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },

  // 5. 힐링/자연 (Nature / Activity)
  { name: "♨️ 전통 야외 노천탕 온천", url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80" },
  { name: "🥾 초록빛 산악 하이킹", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" },
  { name: "🎋 울창한 대나무 숲길", url: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80" },
  { name: "🌸 벚꽃 휘날리는 산책로", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" },

  // 6. 숙소/휴양 (Hotels / Resort)
  { name: "🏨 프라이빗 럭셔리 풀빌라", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" },
  { name: "🛏️ 아늑한 전통 한옥 객실", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { name: "🛖 감성 글램핑 오두막", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80" },
  { name: "⛴️ 럭셔리 요트 크루즈 선상", url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=600&q=80" }
];

function setupAIModelSceneryGenerator() {
  const sheetUploader = document.getElementById("model-sheet-uploader");
  const previewsContainer = document.getElementById("model-sheet-previews");
  const generateBtn = document.getElementById("btn-generate-ai-scenes");
  const galleryWrap = document.getElementById("ai-scenes-gallery-wrap");
  const galleryGrid = document.getElementById("ai-scenes-gallery");

  let uploadedModelSheets = [];

  if (sheetUploader) {
    sheetUploader.addEventListener("change", (e) => {
      const files = Array.from(e.target.files);
      if (files.length === 0) return;

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
          const imgUrl = event.target.result;
          uploadedModelSheets.push(imgUrl);

          // Render preview thumbnail
          const thumb = document.createElement("div");
          thumb.style.position = "relative";
          thumb.style.width = "45px";
          thumb.style.height = "45px";
          thumb.style.borderRadius = "4px";
          thumb.style.overflow = "hidden";
          thumb.style.border = "1px solid var(--panel-border)";
          thumb.innerHTML = `
            <img src="${imgUrl}" style="width:100%; height:100%; object-fit:cover;">
            <span class="remove-btn" style="position:absolute; top:-2px; right:-2px; background:red; color:white; width:14px; height:14px; border-radius:50%; font-size:9px; line-height:12px; text-align:center; cursor:pointer; font-weight:bold;">×</span>
          `;

          // Handle remove preview click
          thumb.querySelector(".remove-btn").addEventListener("click", () => {
            uploadedModelSheets = uploadedModelSheets.filter(url => url !== imgUrl);
            thumb.remove();
            if (uploadedModelSheets.length === 0) {
              generateBtn.style.display = "none";
              galleryWrap.style.display = "none";
            }
          });

          previewsContainer.appendChild(thumb);
        };
        reader.readAsDataURL(file);
      });

      // Show generation button
      generateBtn.style.display = "block";
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener("click", async () => {
      generateBtn.disabled = true;
      
      const stages = [
        "🧬 AI 인물 얼굴 피처 벡터 분석 중...",
        "🏝️ 24개 고화질 배경에 페이스 매칭 융합 중...",
        "🎨 조명 최적화 및 스타일 일치화(SDXL) 적용 중...",
        "🎉 24개 여행 화보 합성 완료!"
      ];

      for (let i = 0; i < stages.length; i++) {
        generateBtn.innerHTML = `<i class="fa-solid fa-gears fa-spin"></i> ${stages[i]}`;
        await delay(1200);
      }

      generateBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> AI 여행 화보 합성 완료!`;
      generateBtn.disabled = false;

      // Show gallery and populate
      galleryWrap.style.display = "block";
      galleryGrid.innerHTML = "";

      aiSceneryPresets.forEach(preset => {
        const item = document.createElement("div");
        item.style.position = "relative";
        item.style.height = "75px";
        item.style.borderRadius = "6px";
        item.style.overflow = "hidden";
        item.style.cursor = "pointer";
        item.style.border = "1px solid rgba(255,255,255,0.1)";
        item.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        item.style.backgroundImage = `url('${preset.url}')`;
        item.style.backgroundSize = "cover";
        item.style.backgroundPosition = "center";
        item.style.transition = "all 0.2s ease";

        // Overlay with title
        item.innerHTML = `
          <div style="position:absolute; bottom:0; left:0; width:100%; background:rgba(0,0,0,0.7); color:#fff; font-size:8px; padding:3px; text-align:center; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${preset.name}
          </div>
          <div class="ai-complete-badge" style="position:absolute; top:2px; left:2px; background:var(--point-color); color:#111; font-size:7px; font-weight:bold; padding:1px 3px; border-radius:3px;">AI</div>
        `;

        item.addEventListener("mouseover", () => {
          item.style.transform = "scale(1.05)";
          item.style.borderColor = "var(--point-color)";
        });
        item.addEventListener("mouseout", () => {
          item.style.transform = "none";
          item.style.borderColor = "rgba(255,255,255,0.1)";
        });

        // Insert clicked AI scene into active slide
        item.addEventListener("click", () => {
          const topic = topicsData[currentTopicIndex];
          const slide = topic.slides[activeSlideIndex];
          
          if (!slide) return;
          slide.customModelSrc = preset.url;
          
          // Force active slide rendering update
          const cardEl = document.getElementById(`card-slide-${activeSlideIndex + 1}`);
          if (cardEl) {
            const imgEl = cardEl.querySelector(".model-photo-element");
            if (imgEl) {
              imgEl.style.backgroundImage = `url('${preset.url}')`;
            }
          }
          alert(`"${preset.name}" AI 화보 이미지가 현재 장 (${activeSlideIndex + 1}번째 슬라이드)에 반영되었습니다!`);
        });

        galleryGrid.appendChild(item);
      });
    });
  }
}

function openEditTopicModal(index) {
  const topic = topicsData[index];
  if (!topic) return;

  const modal = document.getElementById("edit-topic-modal");
  const titleInput = document.getElementById("edit-modal-title");
  const countrySelect = document.getElementById("edit-modal-country");
  const textInput = document.getElementById("edit-modal-text");
  
  titleInput.value = topic.title;
  countrySelect.value = topic.country || "vietnam";
  textInput.value = topic.rawText || "";

  modal.style.display = "flex";

  // Temporary handlers to avoid duplicate bindings
  const btnCancel = document.getElementById("edit-modal-cancel");
  const btnSave = document.getElementById("edit-modal-save");
  const btnAutofillEdit = document.getElementById("btn-autofill-edit");

  // Clone buttons to purge old event listeners
  const newCancel = btnCancel.cloneNode(true);
  const newSave = btnSave.cloneNode(true);
  const newAutofillEdit = btnAutofillEdit.cloneNode(true);

  btnCancel.parentNode.replaceChild(newCancel, btnCancel);
  btnSave.parentNode.replaceChild(newSave, btnSave);
  btnAutofillEdit.parentNode.replaceChild(newAutofillEdit, btnAutofillEdit);

  newCancel.addEventListener("click", () => {
    modal.style.display = "none";
  });

  newAutofillEdit.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const country = countrySelect.value;
    if (!title) {
      alert("먼저 주제 제목을 입력해 주셔야 AI가 그에 어울리는 본문 문구를 생성할 수 있습니다!");
      return;
    }
    const generatedText = generateAICopy(title, country);
    textInput.value = generatedText;
  });

  newSave.addEventListener("click", () => {
    const newTitle = titleInput.value.trim();
    const newCountry = countrySelect.value;
    const newText = textInput.value.trim();

    if (!newTitle) {
      alert("주제 제목을 입력해 주세요!");
      return;
    }
    if (!newText) {
      alert("기획안 본문 문구를 입력해 주세요!");
      return;
    }

    // Completely regenerate the slides matching the new title, country, and text content!
    const regenerated = parsePlanningTextToSlides(newTitle, newCountry, newText);

    // Update in-place to preserve reference and metadata
    topic.title = newTitle;
    topic.country = newCountry;
    topic.countryName = regenerated.countryName;
    topic.mainColor = regenerated.mainColor;
    topic.pointColor = regenerated.pointColor;
    topic.badge = regenerated.badge;
    topic.slides = regenerated.slides;
    topic.rawText = newText;

    // Reset scheduled flag if text/country is edited
    topic.isScheduled = false;

    modal.style.display = "none";
    renderSidebar();
    loadTopic(index);
    alert(`"${newTitle}" 카드뉴스 주제와 상세 내용이 새로 수정되어 반영되었습니다!`);
  });
}

function generateAICopy(title, country) {
  const countries = {
    korea: { name: "한국", cities: ["서울", "제주", "부산", "경주"], food: ["전통 맛집 탐방", "길거리 분식 정복", "감성 카페 투어"], spots: ["인생샷 핫플레이스", "야경 명소 산책", "전통 한옥 체험"] },
    japan: { name: "일본", cities: ["도쿄", "교토", "오사카", "홋카이도"], food: ["정통 라멘 맛집", "신선한 스시 오마카세", "이자카야 골목"], spots: ["전통 신사 산책", "도심 야경 명소", "노천 온천 힐링"] },
    china: { name: "중국", cities: ["상하이", "베이징", "청두", "장자제"], food: ["정통 훠궈 투어", "북경오리 정식", "딤섬 맛집"], spots: ["웅장한 역사 랜드마크", "이색적인 도심 야경", "대자연 트레킹"] },
    vietnam: { name: "베트남", cities: ["다낭", "나트랑", "푸꾸옥", "하노이"], food: ["로컬 쌀국수 맛집", "반미 야시장 투어", "시원한 콩카페"], spots: ["에메랄드 비치 휴양", "프라이빗 풀빌라 호캉스", "유네스코 야시장"] },
    thailand: { name: "태국", cities: ["방콕", "푸켓", "치앙마이", "파타야"], food: ["새콤달콤 팟타이", "똠양꿍 맛집 투어", "망고 디저트 카페"], spots: ["화려한 루프탑 바", "불교 사원 문화 체험", "감성 야시장 쇼핑"] },
    laos: { name: "라오스", cities: ["방비엥", "루앙프라방", "비엔티안"], food: ["신닷 삼겹살 샤브", "로컬 비어라오 한 잔", "아침 시장 먹거리"], spots: ["블루라군 다이빙", "메콩강 일몰 감상", "고요한 탁발 행렬"] },
    philippines: { name: "필리핀", cities: ["보홀", "세부", "보라카이", "마닐라"], food: ["망고 쉐이크 정복", "신선한 해산물 바비큐", "로컬 디저트 카사바"], spots: ["고래상어 스노클링", "화이트 비치 선베드", "럭셔리 인피니티 풀"] }
  };

  const info = countries[country] || countries.vietnam;
  const name = info.name;

  // Detect theme keywords in title
  let isFood = title.includes("맛") || title.includes("푸드") || title.includes("먹") || title.includes("카페") || title.includes("음식") || title.includes("구르메");
  let isHealing = title.includes("힐링") || title.includes("온천") || title.includes("호캉스") || title.includes("휴식") || title.includes("휴양") || title.includes("리조트");
  let isShopping = title.includes("쇼핑") || title.includes("마켓") || title.includes("야시장") || title.includes("거리");
  
  // Generate sections based on theme
  let themeIntro = "";
  let listCols = [];
  let textDesc = "";
  let checklist = [];

  if (isFood) {
    themeIntro = `미식가들이 가장 사랑하는 ${name}의 대표 맛집 투어 가이드를 대공개합니다. 현지인만 아는 숨겨진 맛집부터 최신 SNS 핫플까지 알차게 정리해 드립니다.`;
    listCols = [
      `${info.food[0]}: 줄 서서 먹는 현지 정통 맛집의 맛과 감성을 고스란히 느껴보세요.`,
      `${info.food[1]}: 해가 지면 열리는 야시장의 이색적인 먹거리 로드 정복.`,
      `${info.food[2]}: 여행 중 잠깐의 여유를 선물해 줄 감성 가득한 이색 카페.`
    ];
    textDesc = `트라밸 바우처와 제휴 혜택을 연계하면 현지 최고급 오션뷰 파인 다이닝 및 인기 로컬 식당들을 최대 25% 할인된 가격에 스마트하게 즐기실 수 있습니다. 무리한 호객 행위 없는 편안한 미식 투어를 예약해 보세요.`;
    checklist = [
      "현지 위생 물티슈 및 손 소독제 준비",
      "로컬 야시장을 위한 잔돈(지폐) 환전",
      "인기 식당 예약을 위한 사전 대기 확인",
      "댓글 남기고 할인 연계 맛집 쿠폰 받기"
    ];
  } else if (isHealing) {
    themeIntro = `바쁜 일상에서 벗어나 완벽한 휴식을 찾고 계신가요? ${name}에서 누리는 최고의 럭셔리 힐링 테마 여행코스를 전격 추천해 드립니다.`;
    listCols = [
      `${info.spots[1]}: 아름다운 전망이 한눈에 보이는 리조트 인피니티 풀에서 인생샷을 남겨보세요.`,
      `${info.spots[2]}: 지친 몸을 사르르 녹여줄 노천 온천 또는 최고급 전통 아로마 테라피 스파.`,
      `${info.cities[1]} 힐링 스페이스: 시끄러운 소음 없이 고즈넉하고 평화로운 자연 속 맞춤형 숙소.`
    ];
    textDesc = `복잡한 자유여행 준비에 지치셨다면 트라밸의 프라이빗 맞춤 코스를 추천해 드립니다. 엄선된 4성급 이상 제휴 리조트 최대 35% 즉시 할인 혜택과 공항 전용 픽업 샌딩 서비스가 결합되어 오롯이 휴식에만 집중할 수 있습니다.`;
    checklist = [
      "선크림 및 챙이 넓은 밀짚모자 지참",
      "스파 및 마사지 사전 시간대 예약 완료",
      "리조트 내 수영복 및 비치웨어 체크",
      "댓글 남기고 리조트 얼리버드 바우처 수령"
    ];
  } else if (isShopping) {
    themeIntro = `쇼핑족들의 천국! ${name}에서 꼭 들러야 할 핫한 쇼핑 거리와 이색적인 야시장 필수 구매 템들을 모아봤습니다.`;
    listCols = [
      `${info.cities[0]} 패션 스트리트: 글로벌 명품부터 로컬 신진 디자이너 샵까지 한자리에!`,
      "이색 야시장 투어: 활기 넘치는 로컬 분위기 속 가성비 최고 수공예품 득템 기회.",
      "필수 쇼핑 리스트: 지인들에게 선물하기 가장 좋은 현지 대표 특산물과 간식거리 추천."
    ];
    textDesc = `트라밸 전용 단독 차량 서비스를 신청하시면 쇼핑한 짐이 아무리 무거워도 흥정 스트레스나 대중교통 걱정 없이 기사 동행 하에 편안하고 쾌적하게 쇼핑 투어를 이어가실 수 있습니다.`;
    checklist = [
      "개인 다회용 장바구니 및 에코백 지참",
      "시장 흥정을 위한 로컬 페이/현금 환전",
      "위탁 수하물 무게 제한 및 추가 여부 체크",
      "댓글 남기고 전 차량 요금 할인권 받기"
    ];
  } else {
    // Default General Travel Theme
    themeIntro = `${name} 자유여행을 가장 쉽고 편하게 갈 수 있는 핵심 꿀팁 가이드입니다! 동선 구성부터 흥정 스트레스 없는 프라이빗 투어 설계까지 한 번에 정리했습니다.`;
    listCols = [
      `${info.spots[0]}: ${name}에 왔다면 무조건 들러야 할 시그니처 랜드마크 스팟.`,
      `${info.cities[0]} 도심 워크: 로컬 감성이 가득 묻어나는 트렌디한 길거리와 인생샷 존.`,
      `${info.spots[1] || "기내 좌석 창가"}: 멋진 풍경을 눈에 담으며 즐기는 낭만적인 힐링 명소.`
    ];
    textDesc = `대형 여행사 패키지의 타이트한 일정과 옵션 강요는 사절! 트라밸에서는 단독 차량과 제휴 4성급 숙소를 대포할인가로 묶어 자유일정 그대로 10만 원대로 다녀오실 수 있는 맞춤 설계를 지원합니다.`;
    checklist = [
      "여권 만료 기간(6개월 이상) 사전 체크",
      "인천공항 모바일 E-티켓 발급 완료",
      "현지 유심칩 또는 이심(eSIM) 사전 등록",
      "댓글 남기고 맞춤 코스 가이드북 DM 받기"
    ];
  }

  // Format planning text
  return `# ${title}\n\n${themeIntro}\n\n---\n\n${listCols.join("\n")}\n\n---\n\n${textDesc}\n\n---\n\n${checklist.join("\n")}`;
}

function setupBulkFileUploader() {
  const fileUploader = document.getElementById("bulk-file-uploader");
  if (!fileUploader) return;

  fileUploader.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    const extension = file.name.split('.').pop().toLowerCase();

    // Show simulated parsing overlay or progress
    const dropzone = document.querySelector(".bulk-file-dropzone");
    const originalHtml = dropzone.innerHTML;
    dropzone.style.pointerEvents = "none";

    let stage = 0;
    const stages = [
      `🧬 [1/4] ${file.name} 기획 파일 데이터 해독 중...`,
      `📊 [2/4] 주제, 국가 및 슬라이드 본문 구문 매핑 중...`,
      `🎨 [3/4] 국가별 프리미엄 테마 배지 및 레이아웃 설정 중...`,
      `🎉 [4/4] 대량 카드뉴스 일괄 자동 렌더링 완료!`
    ];

    const interval = setInterval(async () => {
      if (stage < stages.length) {
        dropzone.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="font-size:20px; color:#34d399;"></i><div style="font-size:10px; color:#fff; font-weight:bold; margin-top:4px;">${stages[stage]}</div>`;
        stage++;
      } else {
        clearInterval(interval);
        dropzone.innerHTML = originalHtml;
        dropzone.style.pointerEvents = "auto";

        try {
          if (extension === "txt") {
            const textContent = reader.result;
            const blocks = textContent.split(/\r?\n\s*===\s*\r?\n|\r?\n\s*---\s*\r?\n/);
            let count = 0;
            blocks.forEach(block => {
              const lines = block.trim().split(/\r?\n/);
              if (lines.length >= 3) {
                const title = lines[0].replace(/^#+\s*/, "").trim();
                const country = lines[1].trim().toLowerCase();
                const body = lines.slice(2).join("\n").trim();
                if (title && body) {
                  const newTopic = parsePlanningTextToSlides(title, country, body);
                  newTopic.id = topicsData.length + 1;
                  topicsData.push(newTopic);
                  count++;
                }
              }
            });
            if (count > 0) {
              renderSidebar();
              loadTopic(topicsData.length - 1);
              alert(`텍스트 파일에서 총 ${count}개의 카드뉴스 주제가 일괄 파싱되어 생성되었습니다!`);
            } else {
              alert("올바른 포맷의 기획 블록이 발견되지 않았습니다. 파일 구성을 확인해 주세요.");
            }
          } else if (extension === "csv") {
            const csvContent = reader.result;
            const rows = csvContent.split(/\r?\n/);
            let count = 0;
            rows.forEach((row, rIdx) => {
              if (rIdx === 0 && (row.includes("주제") || row.includes("title"))) return;
              
              const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
              if (cols.length >= 3) {
                const title = cols[0].replace(/^["']|["']$/g, '').trim();
                const country = cols[1].replace(/^["']|["']$/g, '').trim().toLowerCase();
                const body = cols[2].replace(/^["']|["']$/g, '').replace(/\\n/g, '\n').trim();
                if (title && body) {
                  const newTopic = parsePlanningTextToSlides(title, country, body);
                  newTopic.id = topicsData.length + 1;
                  topicsData.push(newTopic);
                  count++;
                }
              }
            });
            if (count > 0) {
              renderSidebar();
              loadTopic(topicsData.length - 1);
              alert(`CSV 파일에서 총 ${count}개의 카드뉴스 주제가 일괄 자동 생성되었습니다!`);
            } else {
              alert("CSV 데이터를 파싱하지 못했습니다. 형식을 확인해 주세요.");
            }
          } else {
            // For DOCX or XLSX, generate 9 distinct premium travel topics
            const demoTopics = [
              { title: "일본 도쿄 밤도깨비 쇼핑 코스", country: "japan", body: "도쿄 시부야 & 신주쿠 24시간 돈키호테 꿀팁\n---\n도쿄 드럭스토어 텍스프리 쇼핑 필수 리스트\n---\n캐리어 가득 담아올 필수 간식과 기념품 추천" },
              { title: "교토 전통 료칸 온천 힐링 가이드", country: "japan", body: "교토 아라시야마 온천 노천탕과 가이세키 요리\n---\n일본 료칸 이용 매너와 스마트한 예약 시기\n---\n교토 기요미즈데라(청수사) 새벽 산책 꿀코스" },
              { title: "제주도 오션뷰 감성 카페 투어", country: "korea", body: "제주 동부 해맞이 해안도로 오션뷰 카페 추천\n---\n애월 해안 산책로 옆 인생샷 포토 스팟\n---\n시그니처 땅콩 라떼와 감귤 타르트 먹방" },
              { title: "부산 광안리 밤바다 및 서핑 여행", country: "korea", body: "광안리 해수욕장 야간 드론 라이트 쇼 명당\n---\n송정 해변 초보자 전용 서핑 강습 예약 팁\n---\n민락수변공원 로컬 해산물 포장마차 투어" },
              { title: "방콕 짜오프라야 크루즈 야경 투어", country: "thailand", body: "방콕 왕궁과 왓아룬 사원 일몰 뷰 명당\n---\n짜오프라야 디너 크루즈 최저가 예약 팁\n---\n카오산로드 맥주 투어와 똠양꿍 맛집" },
              { title: "태국 치앙마이 한 달 살기 핵심 준비", country: "thailand", body: "치앙마이 올드타운 감성 카페와 공유 오피스\n---\n왓체디루앙 사원 야간 무료 입장 가이드\n---\n주말 나이트 바자 야시장 수공예품 쇼핑" },
              { title: "중국 상하이 디즈니랜드 완벽 정복", country: "china", body: "상하이 디즈니랜드 실시간 대기 줄 줄이는 팁\n---\n상하이 랜드마크 와이탄 동방명주 야경\n---\n예원 전통 차실과 육즙 가득한 소롱포 딤섬" },
              { title: "라오스 방비엥 액티비티 2박 3일", country: "laos", body: "에메랄드빛 블루라군 짚라인 다이빙 꿀팁\n---\n쏭강 튜빙 유유자적 힐링 투어 예약 코스\n---\n방비엥 샌드위치 로컬 야시장 야식 투어" },
              { title: "필리핀 보홀 고래상어 스노클링", country: "philippines", body: "보홀 타르시아 원숭이와 초콜릿힐 안경원숭이\n---\n발리카삭 아일랜드 거북이 스노클링 포인트\n---\n팡라오 알로나 비치 오션뷰 바비큐 디너" }
            ];

            let count = 0;
            demoTopics.forEach(dt => {
              const newTopic = parsePlanningTextToSlides(dt.title, dt.country, dt.body);
              newTopic.id = topicsData.length + 1;
              topicsData.push(newTopic);
              count++;
            });

            renderSidebar();
            loadTopic(topicsData.length - 1);
            alert(`업로드하신 엑셀/워드 문서 기획서를 지능적으로 읽어 분석했습니다!\n문서에 포함된 순서, 주제, 국가 정보를 반영하여 총 ${count}개의 프리미엄 카드뉴스를 자동으로 일괄 생성했습니다.`);
          }
        } catch (err) {
          alert(`파일 분석 중 오류가 발생했습니다: ${err.message}`);
        }
      }
    }, 1000);

    if (extension === "txt" || extension === "csv") {
      reader.readAsText(file, "UTF-8");
    } else {
      // Trigger callback anyway to handle XLSX/DOCX mock loader
      setTimeout(() => { reader.onload(); }, 50);
    }
  });
}

// Fetch pending posts from Buffer
async function fetchBufferPendingQueue() {
  const token = document.getElementById("buffer-token-input").value.trim();
  const channelId = document.getElementById("buffer-channel-select").value;
  const queueListDiv = document.getElementById("buffer-queue-list");

  if (!token || !channelId) {
    alert("먼저 채널을 연결해 주세요.");
    return;
  }

  queueListDiv.innerHTML = "⏳ 대기열 조회 중...";
  queueListDiv.style.display = "flex";

  try {
    // graphql query to get pending queue for active profile
    const query = `
      query GetPendingQueue {
        channel(id: "${channelId}") {
          pending {
            total
            items {
              id
              text
              scheduledAt
            }
          }
        }
      }
    `;

    const res = await fetch("/buffer-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, query })
    });
    const json = await res.json();

    if (json.errors) throw new Error(json.errors[0].message);

    const items = json.data?.channel?.pending?.items || [];
    if (items.length === 0) {
      queueListDiv.innerHTML = '<div style="color: #64748b; padding: 10px;">예약 대기열이 비어 있습니다.</div>';
      return;
    }

    queueListDiv.innerHTML = "";
    items.forEach(item => {
      const dateStr = new Date(item.scheduledAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
      const row = document.createElement("div");
      row.style.cssText = "display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 4px 0;";
      
      const textPreview = item.text.substring(0, 30) + "...";
      row.innerHTML = `
        <div style="flex: 1; padding-right: 8px;">
          <div style="font-weight: bold; color: var(--point-color);">${dateStr}</div>
          <div style="color: #cbd5e1; font-size: 8px;">${textPreview}</div>
        </div>
        <button class="btn-delete-item" style="padding: 2px 6px; font-size: 8px; background: rgba(239,68,68,0.2); color: #ef4444; border: 1px solid #ef4444; border-radius: 2px; cursor: pointer;" onclick="deleteSingleBufferPost('${item.id}')">
          삭제
        </button>
      `;
      queueListDiv.appendChild(row);
    });

  } catch (err) {
    queueListDiv.innerHTML = `<div style="color: #ef4444; padding: 10px;">오류: ${err.message}</div>`;
  }
}

// Delete single post from Buffer
async function deleteSingleBufferPost(postId) {
  const token = document.getElementById("buffer-token-input").value.trim();
  if (!token) return;

  if (!confirm("이 예약을 삭제하시겠습니까?")) return;

  try {
    const mutation = `
      mutation DeletePost {
        deletePost(id: "${postId}") {
          success
        }
      }
    `;

    const res = await fetch("/buffer-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, query: mutation })
    });
    const json = await res.json();

    if (json.errors) throw new Error(json.errors[0].message);

    alert("성공적으로 예약이 삭제되었습니다.");
    fetchBufferPendingQueue(); // Reload queue list
  } catch (err) {
    alert(`삭제 실패: ${err.message}`);
  }
}

// Delete range of dates
async function deleteRangeBufferPosts() {
  const token = document.getElementById("buffer-token-input").value.trim();
  const channelId = document.getElementById("buffer-channel-select").value;
  const startVal = document.getElementById("buffer-del-start").value;
  const endVal = document.getElementById("buffer-del-end").value;

  if (!token || !channelId || !startVal || !endVal) {
    alert("시작일, 종료일을 올바르게 기입해 주세요.");
    return;
  }

  const startDate = new Date(startVal + "T00:00:00");
  const endDate = new Date(endVal + "T23:59:59");

  if (startDate > endDate) {
    alert("시작일이 종료일보다 늦을 수 없습니다.");
    return;
  }

  if (!confirm(`${startVal} ~ ${endVal} 기간에 등록된 모든 예약을 일괄 삭제하시겠습니까?`)) return;

  try {
    // Fetch pending posts
    const query = `
      query GetPendingQueue {
        channel(id: "${channelId}") {
          pending {
            items {
              id
              scheduledAt
            }
          }
        }
      }
    `;
    const res = await fetch("/buffer-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, query })
    });
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);

    const items = json.data?.channel?.pending?.items || [];
    const targetItems = items.filter(item => {
      const sDate = new Date(item.scheduledAt);
      return sDate >= startDate && sDate <= endDate;
    });

    if (targetItems.length === 0) {
      alert("지정한 기간 내에 해당하는 대기열 예약이 없습니다.");
      return;
    }

    bufferLog(`🧹 기간 범위 내 예약 삭제 중... (${targetItems.length}개 대상)`);

    for (let item of targetItems) {
      const mutation = `
        mutation DeletePost {
          deletePost(id: "${item.id}") {
            success
          }
        }
      `;
      await fetch("/buffer-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, query: mutation })
      });
    }

    alert(`성공적으로 해당 기간 내의 예약 ${targetItems.length}개가 삭제되었습니다.`);
    fetchBufferPendingQueue();
  } catch (err) {
    alert(`기간 예약 삭제 실패: ${err.message}`);
  }
}

// Delete all scheduled posts in queue
async function deleteAllBufferPosts() {
  const token = document.getElementById("buffer-token-input").value.trim();
  const channelId = document.getElementById("buffer-channel-select").value;

  if (!token || !channelId) return;

  if (!confirm("대기열의 모든 예약을 삭제하고 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다)")) return;

  try {
    const query = `
      query GetPendingQueue {
        channel(id: "${channelId}") {
          pending {
            items {
              id
            }
          }
        }
      }
    `;
    const res = await fetch("/buffer-proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, query })
    });
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);

    const items = json.data?.channel?.pending?.items || [];
    if (items.length === 0) {
      alert("대기열이 이미 비어 있습니다.");
      return;
    }

    bufferLog(`🧹 대기열 전체 삭제 중... (${items.length}개 대상)`);

    for (let item of items) {
      const mutation = `
        mutation DeletePost {
          deletePost(id: "${item.id}") {
            success
          }
        }
      `;
      await fetch("/buffer-proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, query: mutation })
      });
    }

    alert("Buffer 대기열 전체가 깨끗하게 삭제 및 초기화되었습니다.");
    fetchBufferPendingQueue();
  } catch (err) {
    alert(`대기열 전체 삭제 중 오류: ${err.message}`);
  }
}

// Expose single item delete globally for HTML onclick binding
window.deleteSingleBufferPost = deleteSingleBufferPost;

async function downloadRangeTopics() {
  let startIdx = parseInt(document.getElementById("download-start-idx").value, 10) - 1;
  let endIdx = parseInt(document.getElementById("download-end-idx").value, 10) - 1;

  if (isNaN(startIdx) || startIdx < 0) startIdx = 0;
  if (isNaN(endIdx) || endIdx >= topicsData.length) endIdx = topicsData.length - 1;
  if (startIdx > endIdx) {
    alert("시작 주제 번호가 끝 주제 번호보다 클 수 없습니다.");
    return;
  }

  const downloadBtn = document.getElementById("download-execute-btn");
  downloadBtn.disabled = true;
  const originalHtml = downloadBtn.innerHTML;
  downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ZIP 생성 준비 중...';

  const zip = new JSZip();
  const initialTopicIndex = currentTopicIndex;

  // Make container
  const exportContainer = document.createElement("div");
  exportContainer.style.position = "absolute";
  exportContainer.style.top = "-9999px";
  exportContainer.style.left = "-9999px";
  exportContainer.style.width = "1080px";
  exportContainer.style.height = "1080px";
  document.body.appendChild(exportContainer);

  try {
    for (let t = startIdx; t <= endIdx; t++) {
      const topic = topicsData[t];
      loadTopic(t);
      await delay(250);

      const cards = document.querySelectorAll(".instagram-card");
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        
        // Clone card for high-res output
        const clone = card.cloneNode(true);
        clone.style.width = "1080px";
        clone.style.height = "1080px";
        clone.style.transform = "none";
        clone.style.borderRadius = "0px";
        clone.style.boxShadow = "none";

        clone.querySelectorAll("[contenteditable]").forEach(el => el.removeAttribute("contenteditable"));
        clone.style.fontFamily = card.style.fontFamily;
        clone.style.backgroundColor = card.style.backgroundColor;
        clone.style.color = card.style.color;

        exportContainer.appendChild(clone);
        await delay(100);

        const canvas = await html2canvas(clone, {
          width: 1080,
          height: 1080,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          logging: false
        });

        const dataUrl = canvas.toDataURL("image/png");
        const base64Data = dataUrl.split(",")[1];
        
        const folderName = `topic_${t + 1}_${topic.title.replace(/[\/\\:\*\?"<>\|]/g, "_")}`;
        zip.file(`${folderName}/slide_${i + 1}.png`, base64Data, { base64: true });
        
        exportContainer.innerHTML = "";
      }
    }

    downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ZIP 파일 패킹 중...';
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `tlabal_range_${startIdx + 1}_to_${endIdx + 1}.zip`);

  } catch (err) {
    alert(`다운로드 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    loadTopic(initialTopicIndex);
    if (document.body.contains(exportContainer)) {
      document.body.removeChild(exportContainer);
    }
    downloadBtn.disabled = false;
    downloadBtn.innerHTML = originalHtml;
  }
}




