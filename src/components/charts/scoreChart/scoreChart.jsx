import PropTypes from 'prop-types'
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts'
import ScoreChartLegend from './legend/scoreChartLegend'
import NoDataText from '../../noDataText/noDataText'

export default function ScoreChart({ data }) {
  const scoreAsPercent = data * 100
  const restAsPercent = 100 - scoreAsPercent
  const emptyData = [
    {
      value: 1,
      fill: 'white',
    },
  ]
  const trueData = [
    {
      value: scoreAsPercent,
      fill: 'red',
    },
    {
      value: restAsPercent,
      fill: 'transparent',
    },
  ]

  return (
    <div className="score-chart">
      {!data ? (
        <NoDataText chart={'score'} title={'Score'} />
      ) : (
        <>
          <h2 className="score-chart__title">Score</h2>
          <ResponsiveContainer>
            <PieChart wrapperStyle={{ outline: 'none' }}>
              <Legend
                verticalAlign="middle"
                content={<ScoreChartLegend score={scoreAsPercent} />}
                wrapperStyle={{ top: 105 }}
              />
              <Pie
                data={emptyData}
                dataKey="value"
                outerRadius={80}
                isAnimationActive={false}
              ></Pie>
              <Pie
                data={trueData}
                dataKey="value"
                innerRadius={80}
                outerRadius={90}
                startAngle={210}
                endAngle={-150}
                cornerRadius={5}
                stroke="transparent"
              ></Pie>
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  )
}

ScoreChart.propTypes = {
  data: PropTypes.number.isRequired,
}
