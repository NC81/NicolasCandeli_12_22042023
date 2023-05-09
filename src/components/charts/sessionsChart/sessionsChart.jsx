import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import SessionsChartTooltip from './tooltip/sessionsChartTooltip'

export default function SessionsChart({ data }) {
  console.log('SessionsChart data', data)

  return (
    <div className="sessions-chart">
      <h2 className="sessions-chart__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            right: -20,
            left: -20,
            bottom: 10,
          }}
        >
          <XAxis
            dataKey="dayLetter"
            style={{
              fontSize: '12px',
              fill: 'rgba(255, 255, 255, 0.5)',
            }}
            axisLine={false}
            tickLine={false}
          ></XAxis>
          <YAxis hide domain={[-20, 150]}></YAxis>
          <Tooltip
            content={<SessionsChartTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <defs>
            <linearGradient id="color-line">
              <stop stopColor="rgba(255,255,255, 0.3)" />
              <stop offset={`${100}%`} stopColor="white" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#color-line)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
