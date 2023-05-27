import PropTypes from 'prop-types'
import InfoCard from './infoCard/infoCard'
import NoDataText from '../../components/noDataText/noDataText'

export default function KeyInfos({ data }) {
  // console.log('KeyInfos', data)

  return (
    <div className="dash-content-cards">
      {!data ? (
        <NoDataText chart={'infos'} title={'Infos clés'} />
      ) : (
        <>
          {' '}
          {Object.keys(data).map((el, value) => {
            return <InfoCard key={`${el}-${value}`} data={data[el]} />
          })}
        </>
      )}
    </div>
  )
}

KeyInfos.propTypes = {
  data: PropTypes.exact({
    calorieCount: PropTypes.object.isRequired,
    proteinCount: PropTypes.object.isRequired,
    carbohydrateCount: PropTypes.object.isRequired,
    lipidCount: PropTypes.object.isRequired,
  }).isRequired,
}
