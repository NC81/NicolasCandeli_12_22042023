import PropTypes from 'prop-types'
import InfoCard from './infoCard/infoCard'

export default function KeyInfos({ data }) {
  return (
    <div className="key-infos">
      {Object.keys(data).map((el, value) => {
        return <InfoCard key={`${el}-${value}`} cardData={data[el]} />
      })}
    </div>
  )
}

KeyInfos.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

// KeyInfos.propTypes = {
//   data: PropTypes.exact({
//     calorieCount: PropTypes.object.isRequired,
//     proteinCount: PropTypes.object.isRequired,
//     carbohydrateCount: PropTypes.object.isRequired,
//     lipidCount: PropTypes.object.isRequired,
//   }),
// }
