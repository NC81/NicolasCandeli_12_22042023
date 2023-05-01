import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

export default function PerfChart({ data }) {
  return (
    <>
      <div className="perf-chart">
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis
            tick={false}
            axisLine={false}
            tickCount={6}
            // domain={[0, 250]}
          />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </>
  )
}
