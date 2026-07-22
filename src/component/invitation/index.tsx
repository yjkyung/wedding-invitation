import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  LOCALIZED,
} from "../../const"
import { Modal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"
import { useState } from "react"
import { useTranslation } from "../../language"

/**
 * 초대 메시지와 혼주 정보, 연락하기 기능을 제공하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 모시는 글 섹션
 */
export const Invitation = () => {
  const contactModalState = useState(false)
  const { t, language } = useTranslation()
  const {
    groomFullname,
    groomTitle,
    brideFullname,
    brideTitle,
  } = LOCALIZED[language]

  return (
    <>
      <LazyDiv className="card invitation">
        <h2 className="english">Invitation</h2>

        <div className="break" />

        {/* 초대 문구 */}
        {t.invitation.greetingPart1.map((line) => (
          <div className="content" key={line}>
            {line}
          </div>
        ))}
        <div className="break" />
        {t.invitation.greetingPart2.map((line) => (
          <div className="content" key={line}>
            {line}
          </div>
        ))}
        <div className="break" />
        {t.invitation.greetingPart3.map((line) => (
          <div className="content" key={line}>
            {line}
          </div>
        ))}

        <div className="break" />

        {/* 혼주 및 신랑 정보 */}
        <div className="name">
          {language === "ko" ? (
            <>
              {GROOM_FATHER} · {GROOM_MOTHER}
              <span className="relation">
                의 <span className="relation-name">{groomTitle}</span>
              </span>{" "}
              {groomFullname}
            </>
          ) : (
            <>
              {groomFullname}
              <span className="relation">
                , <span className="relation-name">{groomTitle}</span> of
              </span>{" "}
              {GROOM_FATHER} · {GROOM_MOTHER}
            </>
          )}
        </div>
        {/* 혼주 및 신부 정보 */}
        <div className="name">
          {language === "ko" ? (
            <>
              {BRIDE_FATHER} · {BRIDE_MOTHER}
              <span className="relation">
                의 <span className="relation-name">{brideTitle}</span>
              </span>{" "}
              {brideFullname}
            </>
          ) : (
            <>
              {brideFullname}
              <span className="relation">
                , <span className="relation-name">{brideTitle}</span> of
              </span>{" "}
              {BRIDE_FATHER} · {BRIDE_MOTHER}
            </>
          )}
        </div>

        <div className="break" />

        <Button
          onClick={() => {
            contactModalState[1](true)
          }}
        >
          {t.invitation.contactButton}
        </Button>
      </LazyDiv>

      {/* 연락처 정보 모달 */}
      <Modal
        modalState={contactModalState}
        className="contact-modal"
        closeOnClickBackground={true}
      >
        <div className="header">
          <div className="title-group">
            <div className="title">{t.invitation.contactModalTitle}</div>
            <div className="subtitle">{t.invitation.contactModalSubtitle}</div>
          </div>
        </div>

        <div className="content">
          {/* 신랑측 연락처 */}
          <div className="contact-info">
            {GROOM_INFO.filter(({ phone }) => !!phone).map(
              ({ relationKey, name, phone }) => (
                <Fragment key={relationKey}>
                  <div className="relation">
                    {t.common.relation[relationKey]}
                  </div>
                  <div>{name}</div>
                  <div>
                    {/* 전화 걸기 */}
                    <PhoneIcon
                      className="flip icon"
                      onClick={() => {
                        window.open(`tel:${phone}`, "_self")
                      }}
                    />
                    {/* 문자 보내기 */}
                    <EnvelopeIcon
                      className="icon"
                      onClick={() => {
                        window.open(`sms:${phone}`, "_self")
                      }}
                    />
                  </div>
                </Fragment>
              ),
            )}
          </div>
          {/* 신부측 연락처 */}
          <div className="contact-info">
            {BRIDE_INFO.filter(({ phone }) => !!phone).map(
              ({ relationKey, name, phone }) => (
                <Fragment key={relationKey}>
                  <div className="relation">
                    {t.common.relation[relationKey]}
                  </div>
                  <div>{name}</div>
                  <div>
                    <PhoneIcon
                      className="flip icon"
                      onClick={() => {
                        window.open(`tel:${phone}`, "_self")
                      }}
                    />
                    <EnvelopeIcon
                      className="icon"
                      onClick={() => {
                        window.open(`sms:${phone}`, "_self")
                      }}
                    />
                  </div>
                </Fragment>
              ),
            )}
          </div>
        </div>
        <div className="footer">
          <Button
            buttonStyle="style2"
            className="bg-light-grey-color text-dark-color"
            onClick={() => contactModalState[1](false)}
          >
            {t.common.close}
          </Button>
        </div>
      </Modal>
    </>
  )
}
