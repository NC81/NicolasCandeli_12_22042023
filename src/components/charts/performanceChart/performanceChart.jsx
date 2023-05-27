import PropTypes from 'prop-types'
import NoDataText from '../../noDataText/noDataText'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Text,
  ResponsiveContainer,
} from 'recharts'

export default function PerformanceChart({ data }) {
  // console.log('PerformanceChart', data)

  return (
    <article className="perf-chart">
      {!data ? (
        <NoDataText chart={'performance'} title={'Type d’activité'} />
      ) : (
        <>
          <ResponsiveContainer>
            <RadarChart outerRadius={90} data={data}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="type"
                tick={(props) => renderPolarAngleAxis(props)}
              />
              <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
              <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </article>
  )
}

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 10}
      x={x + (x - cx) / 1000}
      fill="white"
      fontSize="12px"
    >
      {payload.value}
    </Text>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
