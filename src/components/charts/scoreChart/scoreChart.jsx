import PropTypes from 'prop-types'
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts'
import ScoreChartLegend from './legend/scoreChartLegend'
import NoDataText from '../../noDataText/noDataText'

export default function ScoreChart({ data }) {
  return (
    <article className="score-chart">
      {!data ? (
        <NoDataText chart={'score'} title={'Score'} />
      ) : (
        <>
          <h2 className="score-chart__title">Score</h2>
          <ResponsiveContainer>
            <PieChart wrapperStyle={{ outline: 'none' }}>
              <Legend
                verticalAlign="middle"
                content={<ScoreChartLegend score={data[0].value} />}
                wrapperStyle={{ top: 105 }}
              />
              <Pie
                data={[{ value: 1, fill: 'white' }]}
                dataKey="value"
                outerRadius={80}
                isAnimationActive={false}
              ></Pie>
              <Pie
                data={data}
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
    </article>
  )
}

ScoreChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      fill: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
