import { createContext } from "react"
import { Language } from "./types"

/**
 * 현재 언어 상태를 전역적으로 공유하기 위한 Context입니다.
 */
export const LanguageContext = createContext({
  /** 현재 선택된 언어 */
  language: "ko" as Language,
  /** 언어 변경 함수 */
  setLanguage: (() => {}) as (language: Language) => void,
})
