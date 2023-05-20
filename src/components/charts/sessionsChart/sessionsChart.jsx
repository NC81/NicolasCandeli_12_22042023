import { useState } from 'react'
import PropTypes from 'prop-types'
import NoDataText from '../../noDataText/noDataText'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts'
import SessionsChartTooltip from './tooltip/sessionsChartTooltip'

export default function SessionsChart({ data }) {
  const [isTooltipActive, setTooltipActive] = useState(false)
  const [TooltipIndex, setTooltipIndex] = useState(0)

  function handleMouseOver(e) {
    setTooltipActive(e.isTooltipActive)
    setTooltipIndex(e.activeTooltipIndex)
    // console.log('handleMouseOver', e)
  }

  function CustomActiveDot(props) {
    const { cx, cy } = props
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth={10}
        fill="white"
      />
    )
  }

  return (
    <div className="sessions-chart">
      {!data ? (
        <NoDataText chart={'sessions'} title={'Durée moyenne des sessions'} />
      ) : (
        <>
          <h2 className="sessions-chart__title">Durée moyenne des sessions</h2>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                right: -20,
                left: -20,
                bottom: 10,
              }}
              onMouseMove={(e) => {
                handleMouseOver(e)
              }}
              onMouseLeave={() => {
                setTooltipActive(false)
              }}
            >
              {isTooltipActive ? (
                <ReferenceArea
                  x1={TooltipIndex}
                  y1={-46}
                  ifOverflow="visible"
                  fill="rgba(0, 0, 0, 0.15)"
                />
              ) : null}
              <XAxis
                dataKey="dayLetter"
                style={{
                  fontSize: '12px',
                  fill: 'rgba(255, 255, 255, 0.5)',
                }}
                axisLine={false}
                tickLine={false}
              ></XAxis>
              <YAxis hide domain={['dataMin - 20', 'dataMax + 60']} />
              <Tooltip
                content={<SessionsChartTooltip />}
                wrapperStyle={{ outline: 'none' }}
                cursor={false}
              />
              <defs>
                <linearGradient id="color-line">
                  <stop stopColor="rgba(255,255,255, 0.3)" />
                  <stop offset={'100%'} stopColor="white" />
                </linearGradient>
              </defs>
              <Line
                type="natural"
                dataKey="sessionLength"
                stroke="url(#color-line)"
                strokeWidth={2}
                dot={false}
                activeDot={<CustomActiveDot />}
                animationDuration={500}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  )
}

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
      dayLetter: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
