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
  console.log('Activity data', data.sessions)

  return (
    <div className="bar-chart">
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={data.sessions}>
          <CartesianGrid
            strokeDasharray="1 1"
            verticalPoints={[0]}
            horizontalPoints={[0, 69]}
          />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            yAxisId="right"
          />
          <YAxis
            dataKey="calories"
            orientation="left"
            axisLine={false}
            tickLine={false}
            yAxisId="left"
          />
          <Tooltip />
          <Legend iconType="circle" iconSize="8" verticalAlign="top" />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={4}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
