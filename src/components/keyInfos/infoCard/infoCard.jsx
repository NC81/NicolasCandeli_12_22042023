import PropTypes from 'prop-types'
import NoDataText from '../../noDataText/noDataText'

export default function InfoCard({ data }) {
  return (
    <article className="info-card">
      {!data.value ? (
        <NoDataText chart={'infos'} title={data.name} />
      ) : (
        <>
          <div
            className="info-card__icon-wrapper"
            style={{ backgroundColor: `${data.color}` }}
          >
            <img src={data.icon} alt={data.alt} />
          </div>
          <div>
            <p>
              {data.value}
              {data.unit}
            </p>
            <h2>{data.name}</h2>
          </div>
        </>
      )}
    </article>
  )
}

InfoCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}
