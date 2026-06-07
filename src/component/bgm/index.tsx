import { useEffect, useRef, useState } from "react"

const base = import.meta.env.BASE_URL
const BGM_URL = (base.endsWith("/") ? base : base + "/") + "bgm.mp3"

export const BGM = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.5

    const start = () => {
      if (started.current) return
      started.current = true
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }

    // 첫 사용자 인터랙션 시 재생
    window.addEventListener("touchstart", start, { once: true })
    window.addEventListener("click", start, { once: true })
    window.addEventListener("scroll", start, { once: true })

    return () => {
      window.removeEventListener("touchstart", start)
      window.removeEventListener("click", start)
      window.removeEventListener("scroll", start)
    }
  }, [])

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
      started.current = true
    }
  }

  return (
    <>
      <audio ref={audioRef} src={BGM_URL} />
      <button className={"bgm-button" + (playing ? " playing" : "")} onClick={toggle} aria-label="배경음악 켜기/끄기">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
        </svg>
      </button>
    </>
  )
}
