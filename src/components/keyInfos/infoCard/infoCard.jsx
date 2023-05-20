import PropTypes from 'prop-types'
import NoDataText from '../../noDataText/noDataText'

export default function InfoCard({ data }) {
  return (
    <div className="info-card">
      {!data.value ? (
        <NoDataText chart={'infos'} title={data.name} />
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
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}
