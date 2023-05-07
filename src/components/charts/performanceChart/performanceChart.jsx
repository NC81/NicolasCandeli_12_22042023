import PropTypes from 'prop-types'
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
  return (
    <div className="perf-chart">
      <ResponsiveContainer>
        <RadarChart
          cx={129}
          cy={132}
          outerRadius={90}
          width={258}
          height={263}
          data={data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="type"
            tick={(props) => renderPolarAngleAxis(props)}
            // tick={{ fill: 'white', fontSize: 12 }}
          />
          <PolarRadiusAxis
            tick={false}
            axisLine={false}
            tickCount={6}
            // domain={[0, 250]}
          />
          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}