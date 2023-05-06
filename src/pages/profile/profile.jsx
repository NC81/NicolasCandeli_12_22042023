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
    <div className="dash-wrapper">
      <header>
        <div className="dash-header-title">
          <h1 className="dash-header-title-greetings">
            Bonjour{' '}
            <span className="dash-header-title-greetings__name">
              {firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dash-header-hidden"></div>
      </header>

      <main>
        <div className="dash-charts">
          <ActivityChart data={activity} />
          <div className="dash-charts__group">
            {' '}
            <SessionsChart data={weekSessions} />
            <PerformanceChart data={performance} />
            <ScoreChart data={score ?? todayScore} />
          </div>
        </div>
        <KeyInfos data={keyData} />
      </main>
    </div>
  )
}
