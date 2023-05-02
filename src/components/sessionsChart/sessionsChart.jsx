import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

export default function SessionsChart({ data }) {
  console.log('SessionsChart data', data)

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <>
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        </>
      )
    }
    return null
  }

  return (
    <div className="sessions-chart">
      <h2 className="sessions-chart__title">Durée moyenne des sessions</h2>
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{
          top: 5,
          right: -20,
          left: -20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          style={{
            fontSize: '12px',
            fill: 'rgba(255, 255, 255, 0.6)',
          }}
          axisLine={false}
          tickLine={false}
        ></XAxis>
        <YAxis hide domain={[-20, 150]}></YAxis>
        <Tooltip
          content={<CustomTooltip />}
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
    </div>
  )
}
