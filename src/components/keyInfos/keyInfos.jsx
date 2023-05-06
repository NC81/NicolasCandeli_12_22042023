import PropTypes from 'prop-types'
import InfoCard from './infoCard/infoCard'

export default function KeyInfos({ data }) {
  return (
    <>
      <div className="key-infos">
        {Object.keys(data).map(function (el, value) {
          return <InfoCard key={`${el}-${value}`} el={el} value={data[el]} />
        })}
        <div className="info-card--hidden"></div>
        <div className="info-card--hidden"></div>
      </div>
    </>
  )
}

KeyInfos.propTypes = {
  data: PropTypes.objectOf(PropTypes.number).isRequired,
}
