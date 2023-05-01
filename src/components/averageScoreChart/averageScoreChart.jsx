// import { findMockUserMainData } from '../../services/findUserData/mock'
import { PieChart, Pie } from 'recharts'

export default function AverageScoreChart({ data }) {
  const scoreAsPercent = Number(data) * 100
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
    <div className="avg-score-chart">
      <h2 className="avg-score-chart__title">Score</h2>
      <p className="avg-score-chart__legend">
        <span>{scoreAsPercent}%</span>
        <br />
        <span>de votre objectif</span>
      </p>
      <PieChart width={220} height={220}>
        <Pie
          data={data1}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          stroke={0}
          isAnimationActive={false}
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
          stroke={0}
        ></Pie>
      </PieChart>
    </div>
  )
}
