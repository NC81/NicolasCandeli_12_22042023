import PropTypes from 'prop-types'
import NoDataText from '../../noDataText/noDataText'

export default function InfoCard({ data }) {
  // console.log('InfoCard data', data)

  return (
    <div className="info-card">
      {!data.value ? (
        <NoDataText chart={'infos'} title={'Infos clés'} />
      ) : (
        <>
          <div
            className="info-card__icon-container"
            style={{ backgroundColor: `${data.color}` }}
          >
            <img src={data.icon} alt={data.alt} />
          </div>
          <div className="info-card__details">
            <p>
              {data.value}
              {data.unit}
            </p>
            <p>{data.name}</p>
          </div>
        </>
      )}
    </div>
  )
}

InfoCard.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string,
    value: PropTypes.string,
    unit: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
}
