import PropTypes from 'prop-types'
import InfoCard from './infoCard/infoCard'

export default function KeyInfos({ data }) {
  return (
    <div className="key-infos">
      {Object.keys(data).map(function (el, value) {
        return <InfoCard key={`${el}-${value}`} el={el} value={data[el]} />
      })}
    </div>
  )
}

KeyInfos.propTypes = {
  data: PropTypes.object.isRequired,
}
