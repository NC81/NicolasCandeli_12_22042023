import InfoCard from './infoCard/infoCard'
import { findMockUserMainData } from '../../services/findUserData/mock'

export default function KeyInfos({ id }) {
  const { keyData } = findMockUserMainData(id)

  return (
    <div className="key-infos">
      {Object.keys(keyData).map(function (el, value) {
        return <InfoCard key={`${el}-${value}`} el={el} value={keyData[el]} />
      })}
    </div>
  )
}
