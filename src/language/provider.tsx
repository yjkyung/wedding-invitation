import { PropsWithChildren, useEffect, useState } from "react"
import { LanguageContext } from "./context"
import { Language } from "./types"

const STORAGE_KEY = "wedding-language"

/**
 * 로컬 스토리지에 저장된 언어 설정을 불러옵니다. 없으면 한국어를 기본값으로 사용합니다.
 */
const getInitialLanguage = (): Language => {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "en" ? "en" : "ko"
}

/**
 * 현재 언어 상태를 관리하는 Provider 컴포넌트입니다.
 *
 * @param {PropsWithChildren} props - 하위 컴포넌트
 * @returns {JSX.Element} LanguageProvider 컴포넌트
 */
export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (language: Language) => {
    setLanguageState(language)
    window.localStorage.setItem(STORAGE_KEY, language)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
