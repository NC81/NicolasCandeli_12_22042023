import PropTypes from 'prop-types'

export default function ScoreChartLegend({ score }) {
  return (
    <p className="score-chart-legend">
      <span>{score}%</span>
      <br />
      <span>de votre</span>
      <br />
      <span>objectif</span>
    </p>
  )
}

ScoreChartLegend.propTypes = {
  score: PropTypes.number.isRequired,
}
