import ActivityChartLegend from './activityChartLegend/activityChartLegend'
import ActivityChartTooltip from './activityChartTooltip/activityChartTooltip'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function ActivityChart({ data }) {
  console.log('Activity data', data)
  const axisStyle = {
    fill: '#9B9EAC',
    fontSize: '15px',
  }

  return (
    <div className="activity-chart">
      <h2 className="activity-chart__title">Activité quotidienne</h2>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 112,
            right: 40,
            left: 0,
            bottom: 23,
          }}
          barGap={8}
        >
          <Legend verticalAlign="top" content={<ActivityChartLegend />} />
          <CartesianGrid
            strokeDasharray="2 2"
            stroke="#DEDEDE"
            vertical={false}
          />
          <XAxis
            dataKey="number"
            tickMargin={16}
            stroke="#DEDEDE"
            tickLine={false}
            padding={{ left: -45, right: -45 }}
            style={axisStyle}
          />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            yAxisId="right"
            domain={[
              (dataMin) => (dataMin % 2 === 0 ? dataMin - 2 : dataMin - 3),
              (dataMax) => (dataMax % 2 === 0 ? dataMax + 4 : dataMax + 5),
            ]}
            tickCount={3}
            tickMargin={45}
            axisLine={false}
            tickLine={false}
            style={axisStyle}
          />
          <YAxis
            dataKey="calories"
            orientation="left"
            yAxisId="left"
            domain={[0, 'dataMax + 50']}
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <Tooltip
            cursor={{ fill: '#C4C4C480' }}
            content={<ActivityChartTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
