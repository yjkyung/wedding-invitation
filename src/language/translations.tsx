/**
 * 사이트 전반에서 사용되는 UI 텍스트(고정 문구, 버튼, 안내 문구 등)의 한/영 번역 묶음입니다.
 * 신랑/신부 이름, 예식 장소 등 데이터성 텍스트는 const.ts의 LOCALIZED를 사용합니다.
 */
export const translations = {
  ko: {
    common: {
      close: "닫기",
      relation: {
        bride: "신부",
        brideFather: "신부 아버지",
        brideMother: "신부 어머니",
        groom: "신랑",
        groomFather: "신랑 아버지",
        groomMother: "신랑 어머니",
      },
    },
    invitation: {
      greetingPart1: ["함께하는 모든 계절이 ", "특별해지는 사람을 만났습니다."],
      greetingPart2: [
        "뜨거운 여름을 지나 결실의 계절로 향하는 9월",
        "저희 두 사람이 부부라는 이름으로 ",
        "새로운 시작을 하려합니다.",
      ],
      greetingPart3: ["이 기쁨을 함께 나누고", "저희의 앞날을 축복해 주세요."],
      contactButton: "연락하기",
      contactModalTitle: "축하 인사 전하기",
      contactModalSubtitle: "전화, 문자메세지로 축하 인사를 전해보세요.",
    },
    calendar: {
      countdownBefore: (groom: string, bride: string, days: number) => (
        <>
          {groom} & {bride}의 결혼식이 <span className="d-day">{days}</span>
          일 남았습니다.
        </>
      ),
      countdownToday: (groom: string, bride: string) => (
        <>
          {groom} & {bride}의 결혼식날, 오늘입니다.
        </>
      ),
      countdownAfter: (groom: string, bride: string, days: number) => (
        <>
          {groom} & {bride}의 결혼식이 <span className="d-day">{days}</span>
          일 지났습니다.
        </>
      ),
    },
    location: {
      transitHeading: "대중교통",
      transitContent: (
        <>
          * 지하철 이용 시
          <br />
          수인분당선 <b>수원시청역 10번 출구</b>
          <br />
          도보 2분 거리
        </>
      ),
      busContent: (
        <>
          * 시내버스
          <br />
          <b>13-1, 92-1</b> → 수원시청역 9번출구, 국민연금공단 하차
          <br />
          <b>51</b> → 수원시청역 1번출구, 경인일보 하차
          <br />
          <b>80, 81</b> → 수원시청역 1번출구, 경인일보 하차
        </>
      ),
      intercityBusContent: (
        <>
          * 시외버스
          <br />
          강남역·양재역 → <b>3007번</b> (매탄1동주민센터 하차 후 81번 환승)
          <br />
          강남역·양재역 → <b>3002번</b> (수원시청역 8번출구 하차)
          <br />
          사당역 → <b>7000·7001번</b> (법원사거리 하차 후 81번 환승)
          <br />
          잠실역 → <b>M5342</b> (망포역 하차 후 61번 환승)
          <br />
          서현역 → <b>4000번</b> (수원시청역 8번출구 하차)
        </>
      ),
      carHeading: "자가용",
      carContent: (
        <>
          네이버 지도, 카카오 네비, 티맵 등 이용
          <br />
          <b>파티움하우스 수원</b> 검색
          <br />
          <b>- 웨딩홀 입구에서 주차요원 안내를 받고 이동하시기 바랍니다.</b>{" "}
          <br />
          <b>- 농협, 경인일보, 파비오더씨타, 경기아트센터</b> <br />
          <b>- 2시간 무료 주차 가능</b> <br />
        </>
      ),
      lockMessage: (
        <>
          좌측 상단 자물쇠 버튼을 눌러
          <br />
          터치 잠금 해제 후 확대 및 이동해 주세요.
        </>
      ),
      naverMap: "네이버 지도",
      kakaoNavi: "카카오 내비",
      tmap: "티맵",
      mobileOnlyAlert: "모바일에서 확인하실 수 있습니다.",
    },
    information: {
      mealHeading: "식사 안내",
      mealContent: (
        <>
          식사시간: 11시 40분 ~ 14시 10분
          <br />
          {/* 장소: 5층 연회장 */}
        </>
      ),
      donationHeading: "마음 전하기",
      donationContent: (
        <>
          참석이 어려워 직접 축하해주지 못하는
          <br />
          분들을 위해 계좌번호를 기재하였습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </>
      ),
      viewGroomAccount: "신랑측 계좌번호 보기",
      viewBrideAccount: "신부측 계좌번호 보기",
      groomAccountTitle: "신랑측 계좌번호",
      brideAccountTitle: "신부측 계좌번호",
      copy: "복사하기",
      copiedAlert: (account: string) => `${account}\n복사되었습니다.`,
      copyFailedAlert: "복사에 실패했습니다.",
    },
    attendance: {
      heading: "참석 의사 전달",
      content: (
        <>
          신랑, 신부에게 참석의사를
          <br />
          미리 전달할 수 있어요.
        </>
      ),
      sendButton: "참석 의사 전달하기",
      infoModalTitle: "참석 의사 전달 안내",
      infoMessage: (
        <>
          축하의 마음으로 참석해주시는
          <br />
          모든 분들을 귀하게 모실 수 있도록
          <br />
          참석 및 식사 여부를 미리 여쭙고자 합니다.
          <div className="break" />
          부담없이 알려주시면
          <br />
          정성껏 준비하겠습니다.
        </>
      ),
      weddingInfoLine: (groom: string, bride: string) => (
        <>
          신랑 {groom} & 신부 {bride}
        </>
      ),
      formTitle: "참석 의사 전달하기",
      sideLabel: "구분",
      nameLabel: "성함",
      namePlaceholder: "참석자 성함을 입력해주세요.",
      mealLabel: "식사",
      mealYes: "예정",
      mealUndecided: "미정",
      mealNo: "불참",
      countLabel: "참석 인원 (본인 포함)",
      countUnit: "명",
      submit: "전달하기",
      selectSideAlert: "신랑 또는 신부를 선택해주세요.",
      enterNameAlert: "성함을 입력해주세요.",
      nameTooLongAlert: (max: number) =>
        `성함을 ${max}자 이하로 입력해주세요.`,
      selectMealAlert: "식사 여부를 선택해주세요.",
      enterCountAlert: "참석 인원을 입력해주세요.",
      countTooLowAlert: (min: number) =>
        `참석 인원을 ${min}명 이상으로 입력해주세요.`,
      submitSuccessAlert: "참석 의사가 성공적으로 전달되었습니다.",
      submitFailedAlert: "참석 의사 전달에 실패했습니다.",
    },
    gallery: {
      viewAll: "사진 전체보기",
    },
    share: {
      kakaoTitle: (groom: string, bride: string) =>
        `${groom} ❤️ ${bride}의 결혼식에 초대합니다.`,
      kakaoButton: "초대장 보기",
      shareButton: "카카오톡으로 공유하기",
    },
  },
  en: {
    common: {
      close: "Close",
      relation: {
        bride: "Bride",
        brideFather: "Bride's Father",
        brideMother: "Bride's Mother",
        groom: "Groom",
        groomFather: "Groom's Father",
        groomMother: "Groom's Mother",
      },
    },
    invitation: {
      greetingPart1: [
        "We found each other —",
        "someone who makes every season special.",
      ],
      greetingPart2: [
        "This September, as summer's heat gives way",
        "to the season of harvest, the two of us",
        "are about to begin a new journey as husband and wife.",
      ],
      greetingPart3: [
        "Please join us in sharing this joy",
        "and blessing the road ahead.",
      ],
      contactButton: "Contact Us",
      contactModalTitle: "Send Your Congratulations",
      contactModalSubtitle: "Reach out by phone call or text message.",
    },
    calendar: {
      countdownBefore: (groom: string, bride: string, days: number) => (
        <>
          <span className="d-day">{days}</span> days until {groom} &amp;{" "}
          {bride}&apos;s wedding.
        </>
      ),
      countdownToday: (groom: string, bride: string) => (
        <>
          Today is the wedding day for {groom} &amp; {bride}!
        </>
      ),
      countdownAfter: (groom: string, bride: string, days: number) => (
        <>
          <span className="d-day">{days}</span> days since {groom} &amp;{" "}
          {bride}&apos;s wedding.
        </>
      ),
    },
    location: {
      transitHeading: "Public Transit",
      transitContent: (
        <>
          * By subway
          <br />
          Suin-Bundang Line, <b>Suwon City Hall Stn., Exit 10</b>
          <br />
          2-min walk
        </>
      ),
      busContent: (
        <>
          * City bus
          <br />
          <b>13-1, 92-1</b> → Get off at Suwon City Hall Stn. Exit 9,
          National Pension Service
          <br />
          <b>51</b> → Get off at Suwon City Hall Stn. Exit 1, Kyeongin Ilbo
          <br />
          <b>80, 81</b> → Get off at Suwon City Hall Stn. Exit 1, Kyeongin
          Ilbo
        </>
      ),
      intercityBusContent: (
        <>
          * Intercity bus
          <br />
          Gangnam/Yangjae Stn. → <b>Bus 3007</b> (get off at Maetan 1-dong
          Community Center, transfer to bus 81)
          <br />
          Gangnam/Yangjae Stn. → <b>Bus 3002</b> (get off at Suwon City Hall
          Stn. Exit 8)
          <br />
          Sadang Stn. → <b>Bus 7000/7001</b> (get off at Beopwon Sageori,
          transfer to bus 81)
          <br />
          Jamsil Stn. → <b>Bus M5342</b> (get off at Mangpo Stn., transfer to
          bus 61)
          <br />
          Seohyeon Stn. → <b>Bus 4000</b> (get off at Suwon City Hall Stn.
          Exit 8)
        </>
      ),
      carHeading: "By Car",
      carContent: (
        <>
          Use Naver Map, Kakao Navi, T map, etc.
          <br />
          Search for <b>&quot;Partium House Suwon&quot;</b>
          <br />
          <b>
            - Please follow the parking staff&apos;s guidance at the wedding
            hall entrance.
          </b>{" "}
          <br />
          <b>
            - Nearby: NongHyup Bank, Kyeongin Ilbo, Fabio the City, Gyeonggi
            Art Center
          </b>{" "}
          <br />
          <b>- 2 hours of free parking available</b> <br />
        </>
      ),
      lockMessage: (
        <>
          Tap the lock icon in the top-left corner
          <br />
          to unlock touch controls, then zoom or move the map.
        </>
      ),
      naverMap: "Naver Map",
      kakaoNavi: "Kakao Navi",
      tmap: "T map",
      mobileOnlyAlert: "This is only available on mobile devices.",
    },
    information: {
      mealHeading: "Meal Information",
      mealContent: (
        <>
          Time: 11:40 AM – 2:10 PM
          <br />
          {/* Venue: 5F Banquet Hall */}
        </>
      ),
      donationHeading: "Wedding Gift",
      donationContent: (
        <>
          For those who are unable to attend in person
          <br />
          to celebrate with us directly, we&apos;ve included
          <br />
          our account information. Thank you for your understanding.
        </>
      ),
      viewGroomAccount: "View Groom's Account",
      viewBrideAccount: "View Bride's Account",
      groomAccountTitle: "Groom's Account",
      brideAccountTitle: "Bride's Account",
      copy: "Copy",
      copiedAlert: (account: string) => `${account}\nCopied to clipboard.`,
      copyFailedAlert: "Failed to copy.",
    },
    attendance: {
      heading: "RSVP",
      content: (
        <>
          Let the couple know in advance
          <br />
          whether you&apos;ll be attending.
        </>
      ),
      sendButton: "Send RSVP",
      infoModalTitle: "RSVP Information",
      infoMessage: (
        <>
          To make sure we can warmly welcome everyone
          <br />
          joining us to celebrate, we&apos;d like to ask
          <br />
          in advance about your attendance and meal preference.
          <div className="break" />
          Please let us know without hesitation —
          <br />
          we&apos;ll prepare with care.
        </>
      ),
      weddingInfoLine: (groom: string, bride: string) => (
        <>
          Groom {groom} &amp; Bride {bride}
        </>
      ),
      formTitle: "Send RSVP",
      sideLabel: "Side",
      nameLabel: "Name",
      namePlaceholder: "Enter the attendee's name.",
      mealLabel: "Meal",
      mealYes: "Attending",
      mealUndecided: "Undecided",
      mealNo: "Not Attending",
      countLabel: "Number of Attendees (including yourself)",
      countUnit: " people",
      submit: "Submit",
      selectSideAlert: "Please select Groom's side or Bride's side.",
      enterNameAlert: "Please enter a name.",
      nameTooLongAlert: (max: number) =>
        `Please enter a name with ${max} characters or fewer.`,
      selectMealAlert: "Please select a meal option.",
      enterCountAlert: "Please enter the number of attendees.",
      countTooLowAlert: (min: number) =>
        `Please enter ${min} or more attendees.`,
      submitSuccessAlert: "Your RSVP has been sent successfully.",
      submitFailedAlert: "Failed to send your RSVP.",
    },
    gallery: {
      viewAll: "View All Photos",
    },
    share: {
      kakaoTitle: (groom: string, bride: string) =>
        `You're invited to ${groom} ❤️ ${bride}'s wedding.`,
      kakaoButton: "View Invitation",
      shareButton: "Share via KakaoTalk",
    },
  },
}
