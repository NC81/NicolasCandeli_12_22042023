export default function ActivityChartTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="activity-chart-tooltip">
        <p className="label">{payload[0].value}kg</p>
        <p className="label">{payload[1].value}Kcal</p>
      </div>
    )
  }
  return null
}
