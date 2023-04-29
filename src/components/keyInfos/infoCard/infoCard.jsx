import energy from '../../../assets/energy.svg'
import chicken from '../../../assets/chicken.svg'
import apple from '../../../assets/apple.svg'
import cheeseburger from '../../../assets/cheeseburger.svg'

export default function InfoCard({ el, value }) {
  function createCardDetails(arg) {
    switch (arg) {
      case 'calorieCount':
        return {
          name: 'Calories',
          unit: 'kCal',
          color: 'rgba(255, 0, 0, 0.07)',
          icon: `${energy}`,
          alt: 'Flamme',
        }
      case 'proteinCount':
        return {
          name: 'Protéines',
          unit: 'g',
          color: 'rgba(74, 184, 255, 0.1)',
          icon: `${chicken}`,
          alt: 'Poulet',
        }
      case 'carbohydrateCount':
        return {
          name: 'Glucides',
          unit: 'g',
          color: 'rgba(249, 206, 35, 0.1)',
          icon: `${apple}`,
          alt: 'Pomme',
        }
      case 'lipidCount':
        return {
          name: 'Lipides',
          unit: 'g',
          color: 'rgba(253, 81, 129, 0.1)',
          icon: `${cheeseburger}`,
          alt: 'Burger',
        }
      // no default
    }
  }

  const formatValue = value.toLocaleString('en-US')
  const { name } = createCardDetails(el)
  const { unit } = createCardDetails(el)
  const { color } = createCardDetails(el)
  const { icon } = createCardDetails(el)
  const { alt } = createCardDetails(el)

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
          {formatValue}
          {unit}
        </p>
        <p>{name}</p>
      </div>
    </div>
  )
}
