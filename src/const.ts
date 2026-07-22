import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"
import { Language } from "./language/types"

// dayjs 설정: UTC 및 타임존 플러그인 확장, 한국어 로캘 설정
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

/**
 * 예식 일시 설정
 * Asia/Seoul 타임존 기준으로 설정합니다.
 */
export const WEDDING_DATE = dayjs.tz("2026-09-19 12:10", "Asia/Seoul")

/**
 * 예식 일시 포맷
 * 분이 0이면 분을 생략하고, 그 외에는 표시합니다.
 * 예: 2024년 8월 24일 토요일 오후 1시
 */
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

/**
 * 예식 일시 포맷 (영문)
 */
export const WEDDING_DATE_FORMAT_EN = `dddd, MMMM D, YYYY, h${WEDDING_DATE.minute() === 0 ? "" : ":mm"} A`

/**
 * 현재 언어에 맞춰 예식 일시를 포맷팅합니다.
 */
export const formatWeddingDate = (language: Language) =>
  WEDDING_DATE.locale(language).format(
    language === "ko" ? WEDDING_DATE_FORMAT : WEDDING_DATE_FORMAT_EN,
  )

/**
 * 예식 당월 휴무일 (달력 표시용)
 * 예: 8월 15일 광복절
 */
export const HOLIDAYS = [24,25,26]

/**
 * 예식 장소 명칭
 */
export const LOCATION = "파티움하우스 수원 3F 파티움홀"

/**
 * 예식 장소 명칭 (영문)
 */
export const LOCATION_EN = "Partium House Suwon, 3F Partium Hall"

/**
 * 예식 장소 상세 주소
 */
export const LOCATION_ADDRESS = "경기 수원시 팔달구 효원로 289, 3층 파티움홀"

/**
 * 예식 장소 상세 주소 (영문)
 */
export const LOCATION_ADDRESS_EN =
  "3F Partium Hall, 289 Hyowon-ro, Paldal-gu, Suwon-si, Gyeonggi-do, South Korea"

/**
 * 카카오톡 공유 시 사용할 위치 정보 주소
 * 필요에 따라 LOCATION과 다르게 설정할 수 있습니다.
 */
export const SHARE_ADDRESS = "경기 수원시 팔달구 효원로 289"

/**
 * 카카오톡 공유 시 사용할 위치 정보 주소 (영문)
 */
export const SHARE_ADDRESS_EN =
  "289 Hyowon-ro, Paldal-gu, Suwon-si, Gyeonggi-do, South Korea"

/**
 * 카카오톡 공유 시 표시될 위치 제목
 */
export const SHARE_ADDRESS_TITLE = LOCATION

/**
 * 카카오톡 공유 시 표시될 위치 제목 (영문)
 */
export const SHARE_ADDRESS_TITLE_EN = LOCATION_EN

/**
 * 지도 서비스(네이버, 카카오)에 사용할 좌표 [경도, 위도]
 */
export const WEDDING_HALL_POSITION = [127.033355, 37.261628]

/**
 * 네이버 지도 장소 ID (NMAP_PLACE_ID)
 * 네이버 지도에서 장소 검색 후 URL의 숫자 부분을 입력합니다.
 */
export const NMAP_PLACE_ID = 12055125
/**
 * 카카오 지도 장소 ID (KMAP_PLACE_ID)
 * 카카오 지도에서 장소 상세보기 클릭 후 URL의 숫자 부분을 입력합니다.
 */
export const KMAP_PLACE_ID = 1818839884

// 신부 정보 설정
export const BRIDE_FULLNAME = "최정윤"
export const BRIDE_FULLNAME_EN = "Choi Jungyun"
export const BRIDE_FIRSTNAME = "정윤"
export const BRIDE_FIRSTNAME_EN = "Jungyun"
export const BRIDE_TITLE = "장녀"
export const BRIDE_TITLE_EN = "daughter"
export const BRIDE_FATHER = "최장준"
export const BRIDE_MOTHER = "이순란(이선화)"

/**
 * 신랑/신부측 연락처 및 계좌 정보 항목의 관계 키입니다.
 */
export type RelationKey =
  | "bride"
  | "brideFather"
  | "brideMother"
  | "groom"
  | "groomFather"
  | "groomMother"

/**
 * 신랑/신부측 연락처 및 계좌 정보 항목 타입입니다.
 */
type PersonInfo = {
  relationKey: RelationKey
  name: string
  phone: string
  account: string
}

/**
 * 신부측 연락처 및 계좌 정보
 */
export const BRIDE_INFO: PersonInfo[] = [
  {
    relationKey: "bride",
    name: BRIDE_FULLNAME,
    phone: "010-6789-8712",
    account: "639002-01-704563 국민은행 ",
  },
  {
    relationKey: "brideFather",
    name: BRIDE_FATHER,
    phone: "010-9777-6699",
    account: "128-12-258067 농협은행 ",
  },
  {
    relationKey: "brideMother",
    name: BRIDE_MOTHER,
    phone: "010-2652-8712",
    account: "110-229-774412 신한은행",
  },
]

// 신랑 정보 설정
export const GROOM_FULLNAME = "경윤진"
export const GROOM_FULLNAME_EN = "Kyung Yunjin"
export const GROOM_FIRSTNAME = "윤진"
export const GROOM_FIRSTNAME_EN = "Yunjin"
export const GROOM_TITLE = "장남"
export const GROOM_TITLE_EN = "son"
export const GROOM_FATHER = "경욱현"
export const GROOM_MOTHER = "김선희"

/**
 * 신랑측 연락처 및 계좌 정보
 */
export const GROOM_INFO: PersonInfo[] = [
  {
    relationKey: "groom",
    name: GROOM_FULLNAME,
    phone: "010-2061-7094",
    account: "671402-01-567409 국민은행",
  },
  {
    relationKey: "groomFather",
    name: GROOM_FATHER,
    phone: "010-5316-7094",
    account: "9002-1335-5967-1 새마을금고",
  },
  {
    relationKey: "groomMother",
    name: GROOM_MOTHER,
    phone: "010-4017-7094",
    account: "010-4017-7094 기업은행",
  },
]

/**
 * 언어별로 달라지는 이름/장소 데이터 묶음입니다.
 */
export const LOCALIZED: Record<
  Language,
  {
    groomFullname: string
    groomFirstname: string
    groomTitle: string
    brideFullname: string
    brideFirstname: string
    brideTitle: string
    location: string
    locationAddress: string
    shareAddress: string
    shareAddressTitle: string
  }
> = {
  ko: {
    groomFullname: GROOM_FULLNAME,
    groomFirstname: GROOM_FIRSTNAME,
    groomTitle: GROOM_TITLE,
    brideFullname: BRIDE_FULLNAME,
    brideFirstname: BRIDE_FIRSTNAME,
    brideTitle: BRIDE_TITLE,
    location: LOCATION,
    locationAddress: LOCATION_ADDRESS,
    shareAddress: SHARE_ADDRESS,
    shareAddressTitle: SHARE_ADDRESS_TITLE,
  },
  en: {
    groomFullname: GROOM_FULLNAME_EN,
    groomFirstname: GROOM_FIRSTNAME_EN,
    groomTitle: GROOM_TITLE_EN,
    brideFullname: BRIDE_FULLNAME_EN,
    brideFirstname: BRIDE_FIRSTNAME_EN,
    brideTitle: BRIDE_TITLE_EN,
    location: LOCATION_EN,
    locationAddress: LOCATION_ADDRESS_EN,
    shareAddress: SHARE_ADDRESS_EN,
    shareAddressTitle: SHARE_ADDRESS_TITLE_EN,
  },
}
