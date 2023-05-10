import PropTypes from 'prop-types'

export default function InfoCard({ cardData }) {
  // console.log('InfoCard data', cardData)
  const { name, value, unit, color, icon, alt } = cardData

  return (
    <div className="info-card">
      <div
        className="info-card__icon-container"
        style={{ backgroundColor: `${color}` }}
      >
        <img src={icon} alt={alt} />
      </div>
      <div className="info-card__details">
        <p>
          {value}
          {unit}
        </p>
        <p>{name}</p>
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  cardData: PropTypes.exact({
    name: PropTypes.string,
    value: PropTypes.string,
    unit: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
}
