import PropTypes from 'prop-types'
import ActivityChartLegend from './legend/activityChartLegend'
import ActivityChartTooltip from './tooltip/activityChartTooltip'
import NoDataText from '../../noDataText/noDataText'
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
  // console.log('ActivityChart data', data)
  const axisStyle = {
    fill: '#9B9EAC',
    fontSize: '14px',
  }

  return (
    <div className="activity-chart">
      {!data ? (
        <NoDataText chart={'activity'} title={'Activité quotidienne'} />
      ) : (
        <>
          <h2 className="activity-chart__title">Activité quotidienne</h2>
          <ResponsiveContainer>
            <BarChart
              data={data}
              height={100}
              margin={{
                top: 112,
                right: 38,
                bottom: 8,
              }}
              barGap={8}
            >
              <Legend
                width={278}
                height={24}
                content={<ActivityChartLegend />}
                wrapperStyle={{ top: 24, right: 26 }}
              />
              <CartesianGrid
                strokeDasharray="2 2"
                stroke="rgb(222, 222, 222)"
                vertical={false}
              />
              <XAxis
                dataKey="dayStringNumber"
                tickMargin={16}
                stroke="rgb(222, 222, 222)"
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
                domain={[0, 'dataMax + 60']}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <Tooltip
                cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                content={<ActivityChartTooltip />}
                wrapperStyle={{ outline: 'none' }}
              />
              <Bar
                yAxisId="right"
                dataKey="kilogram"
                fill="rgb(40, 45, 48)"
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
              <Bar
                yAxisId="left"
                dataKey="calories"
                fill="rgb(230, 0, 0)"
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  )
}

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number,
      calories: PropTypes.number,
      dayStringNumber: PropTypes.string,
    })
  ).isRequired,
}
