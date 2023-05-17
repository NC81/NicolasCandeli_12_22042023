import PropTypes from 'prop-types'
import InfoCard from './infoCard/infoCard'

export default function KeyInfos({ data }) {
  return (
    <div className="key-infos">
      {Object.keys(data).map((el, value) => {
        return <InfoCard key={`${el}-${value}`} data={data[el]} />
      })}
    </div>
  )
}

KeyInfos.propTypes = {
  data: PropTypes.exact({
    calorieCount: PropTypes.object,
    proteinCount: PropTypes.object,
    carbohydrateCount: PropTypes.object,
    lipidCount: PropTypes.object,
  }).isRequired,
}
