import { formatWeddingDate, LOCALIZED } from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"
import { useTranslation } from "../../language"

const baseUrl = import.meta.env.BASE_URL

/**
 * 카카오톡으로 초대장을 공유할 수 있는 버튼 컴포넌트입니다.
 *
 * @returns {JSX.Element} 공유 버튼 섹션
 */
export const ShareButton = () => {
  const kakao = useKakao()
  const { t, language } = useTranslation()
  const { groomFullname, brideFullname, location, shareAddress, shareAddressTitle } =
    LOCALIZED[language]

  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          // 카카오 SDK 로드 전이면 무시
          if (!kakao) {
            return
          }

          // 카카오톡 공유 전송 (위치 기반 템플릿 사용)
          kakao.Share.sendDefault({
            objectType: "location",
            address: shareAddress,
            addressTitle: shareAddressTitle,
            content: {
              title: t.share.kakaoTitle(groomFullname, brideFullname),
              description: formatWeddingDate(language) + "\n" + location,
              imageUrl:
                window.location.protocol +
                "//" +
                window.location.host +
                baseUrl +
                "/preview_image.png",
              link: {
                mobileWebUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  baseUrl,
                webUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  baseUrl,
              },
            },
            buttons: [
              {
                title: t.share.kakaoButton,
                link: {
                  mobileWebUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    baseUrl,
                  webUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    baseUrl,
                },
              },
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> {t.share.shareButton}
      </button>
    </LazyDiv>
  )
}
