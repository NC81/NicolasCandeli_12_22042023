import useParamsInt from '../../utils/hooks'
import MockStore from '../../services/mock-store'
import Format from '../../utils/format'
import KeyInfos from '../../components/keyInfos/keyInfos'
import ScoreChart from '../../components/charts/scoreChart/scoreChart'
import PerformanceChart from '../../components/charts/performanceChart/performanceChart'
import SessionsChart from '../../components/charts/sessionsChart/sessionsChart'
import ActivityChart from '../../components/charts/activityChart/activityChart'

export default function Profile() {
  const id = useParamsInt()

  const newMockStore = new MockStore(id)
  const { firstName } = newMockStore.main.userInfos
  const { score, todayScore } = newMockStore.main
  const { keyData } = newMockStore.main
  console.log('Profile newMockStore', newMockStore)

  const newFormat = new Format(id)
  const { performance } = newFormat
  const { weekSessions } = newFormat
  const { activity } = newFormat
  console.log('Profile newFormat', newFormat)

  return (
    <div className="db-wrapper">
      <header className="db-header">
        <h1 className="db-header-title">
          Bonjour{' '}
          <span className="db-header-title__first-name">{firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <main>
        <ScoreChart data={score ?? todayScore} />
        <KeyInfos data={keyData} />
        <PerformanceChart data={performance} />
        <SessionsChart data={weekSessions} />
        <ActivityChart data={activity} />
      </main>
    </div>
  )
}
