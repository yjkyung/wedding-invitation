import { useContext } from "react"
import { LanguageContext } from "./context"
import { translations } from "./translations"

/**
 * 현재 언어 상태와 언어 변경 함수를 반환하는 Hook입니다.
 */
export const useLanguage = () => useContext(LanguageContext)

/**
 * 현재 언어에 해당하는 번역 텍스트 묶음을 반환하는 Hook입니다.
 */
export const useTranslation = () => {
  const { language } = useContext(LanguageContext)
  return { t: translations[language], language }
}
