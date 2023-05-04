export default function ActivityChartLegend() {
  return (
    <ul className="activity-chart-legend">
      <li>
        <div className="activity-chart-legend__icon activity-chart-legend__icon--weight"></div>
        <span>Poids (kg)</span>
      </li>
      <li>
        <div className="activity-chart-legend__icon activity-chart-legend__icon--calories"></div>
        <span> Calories brûlées (kCal)</span>
      </li>
    </ul>
  )
}
