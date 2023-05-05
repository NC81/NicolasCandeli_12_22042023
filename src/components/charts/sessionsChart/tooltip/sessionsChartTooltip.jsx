import PropTypes from 'prop-types'

export default function SessionsChartTooltip({ active, payload }) {
  console.log('payload sessions tooltip', payload)
  if (active && payload && payload.length) {
    return (
      <div className="sessions-chart-tooltip">
        <p className="label">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}

SessionsChartTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}
