import { useState } from 'react'
import { curveCardinal } from 'd3-shape'
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
  const [activeTooltipIndex, setActiveTooltipIndex] = useState(0)

  return (
    <article className="sessions-chart">
      {!data ? (
        <NoDataText chart={'sessions'} title={'Durée moyenne des sessions'} />
      ) : (
        <>
          <h2 className="sessions-chart__title">Durée moyenne des sessions</h2>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 90,
                right: -18,
                left: -18,
                bottom: 14,
              }}
              onMouseMove={(e) => {
                setTooltipActive(e.isTooltipActive)
                setActiveTooltipIndex(e.activeTooltipIndex)
              }}
              onMouseLeave={() => {
                setTooltipActive(false)
              }}
            >
              {isTooltipActive ? (
                <ReferenceArea
                  x1={activeTooltipIndex}
                  y1={130}
                  y2={-50}
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
              <YAxis hide domain={['dataMin - 10', 'dataMax']} />
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
                type={curveCardinal}
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
    </article>
  )
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

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      sessionLength: PropTypes.number.isRequired,
      dayLetter: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}
