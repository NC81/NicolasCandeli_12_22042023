import PropTypes from 'prop-types'
import { PieChart, Pie, Legend } from 'recharts'
import ScoreChartLegend from './legend/scoreChartLegend'

export default function ScoreChart({ data }) {
  const scoreAsPercent = data * 100
  const restAsPercent = 100 - scoreAsPercent
  const data1 = [
    {
      name: 'Center',
      value: 1,
      fill: 'white',
    },
  ]
  const data2 = [
    {
      name: 'Score',
      value: scoreAsPercent,
      fill: '#ff0000',
    },
    {
      name: 'Rest',
      value: restAsPercent,
      fill: 'transparent',
    },
  ]

  return (
    <div className="score-chart">
      <h2 className="score-chart__title">Score</h2>
      <PieChart width={220} height={220} wrapperStyle={{ outline: 'none' }}>
        <Legend
          width={58}
          height={82}
          layout="vertical"
          verticalAlign="middle"
          content={<ScoreChartLegend score={scoreAsPercent} />}
          wrapperStyle={{ outline: 'none' }}
        />
        <Pie
          data={data1}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          isAnimationActive={false}
          wrapperStyle={{ outline: 'none' }}
        ></Pie>
        <Pie
          data={data2}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          startAngle={200}
          endAngle={-160}
          cornerRadius={5}
          stroke="transparent"
        ></Pie>
      </PieChart>
    </div>
  )
}

ScoreChart.propTypes = {
  data: PropTypes.number.isRequired,
}
