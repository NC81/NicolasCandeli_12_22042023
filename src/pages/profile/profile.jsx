import useParamsInt from '../../utils/hooks'
import MockStore from '../../services/mock-store'
import Format from '../../utils/format'
import ScoreChart from '../../components/scoreChart/scoreChart'
import KeyInfos from '../../components/keyInfos/keyInfos'
import PerfChart from '../../components/perfChart/perfChart'
import SessionsChart from '../../components/sessionsChart/sessionsChart'
// import ActivityChart from '../../components/activityChart/activityChart'

export default function Profile() {
  const id = useParamsInt()

  const newMockStore = new MockStore(id)
  const { score, todayScore } = newMockStore.main
  const { firstName } = newMockStore.main.userInfos
  const { keyData } = newMockStore.main
  // const { _activity } = newMockStore
  console.log('Profile newMockStore', newMockStore)

  const newFormat = new Format(id)
  const { performance } = newFormat
  const { weekSessions } = newFormat
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
        <PerfChart data={performance} />
        <SessionsChart data={weekSessions} />
        {/* <ActivityChart data={_activity} /> */}
      </main>
    </div>
  )
}
