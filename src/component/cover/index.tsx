import { formatWeddingDate, LOCALIZED, WEDDING_DATE } from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"
import { LanguageToggle } from "../languageToggle"
import { useLanguage } from "../../language"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

/**
 * 초대장의 메인 커버 섹션입니다.
 * 예식 일시, 신랑/신부 이름, 장소를 표시합니다.
 *
 * @returns {JSX.Element} 커버 섹션
 */
export const Cover = () => {
  const { language } = useLanguage()
  const { groomFullname, brideFullname, location } = LOCALIZED[language]

  return (
    <LazyDiv className="card cover">
      {/* 한/영 전환 버튼 */}
      <LanguageToggle />

      {/* 상단 날짜 표시 */}
      <div className="wedding-date">
        {WEDDING_DATE.format("YYYY")}
        <div className="divider" />
        {WEDDING_DATE.format("MM")}
        <div className="divider" />
        {WEDDING_DATE.format("DD")}
      </div>
      {/* 요일 표시 (영어) */}
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[WEDDING_DATE.day()]}
      </div>
      {/* 커버 이미지 */}
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">Save the date for the wedding of</div>
      {/* 이름 표시 */}
      <div className="names">
        {groomFullname}
        <div className="divider" />
        {brideFullname}
      </div>
      {/* 예식 정보 (포맷팅된 날짜 및 장소) */}
      <div className="info">{formatWeddingDate(language)}</div>
      <div className="info">{location}</div>
    </LazyDiv>
  )
}
