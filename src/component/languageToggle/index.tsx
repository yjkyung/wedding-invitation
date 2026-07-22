import { useLanguage } from "../../language"

/**
 * 한국어/영어 표시 언어를 전환하는 버튼입니다.
 *
 * @returns {JSX.Element} 언어 전환 버튼
 */
export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-toggle">
      <button
        className={language === "ko" ? "active" : ""}
        onClick={() => setLanguage("ko")}
      >
        KOR
      </button>
      <div className="divider" />
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        ENG
      </button>
    </div>
  )
}
