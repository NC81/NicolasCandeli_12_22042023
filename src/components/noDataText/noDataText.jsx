export default function NoDataText({ chart, title }) {
  return (
    <div className={`no-data no-data--${chart}`}>
      <span>⚠️</span>
      <h3>{title}</h3>
      <span>Données manquantes !</span>
      <span>
        <i>Pensez à les mettre à jour...</i>
      </span>
    </div>
  )
}
