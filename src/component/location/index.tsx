import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCALIZED } from "../../const"
import { useTranslation } from "../../language"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  const { t, language } = useTranslation()
  const { location, locationAddress } = LOCALIZED[language]

  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {location}
          <div className="detail">{locationAddress}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">{t.location.transitHeading}</div>
          <div />
          <div className="content">{t.location.transitContent}</div>
          <div />
          <div className="content">{t.location.busContent}</div>
          <div />
          <div className="content">{t.location.intercityBusContent}</div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">{t.location.carHeading}</div>
          <div />
          <div className="content">{t.location.carContent}</div>
        </div>
      </LazyDiv>
    </>
  )
}
