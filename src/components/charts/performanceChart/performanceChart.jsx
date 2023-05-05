import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

export default function PerformanceChart({ data }) {
  return (
    <div className="perf-chart">
      <RadarChart
        cx={129}
        cy={132}
        outerRadius={90}
        width={258}
        height={263}
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="type" tick={{ fill: 'white', fontSize: 12 }} />
        <PolarRadiusAxis
          tick={false}
          axisLine={false}
          tickCount={6}
          // domain={[0, 250]}
        />
        <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  )
}

PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired,
}
