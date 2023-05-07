import { useRouteLoaderData } from 'react-router-dom'
import MockStore from '../../services/mock-store'
import Format from '../../utils/format'
import KeyInfos from '../../components/keyInfos/keyInfos'
import ScoreChart from '../../components/charts/scoreChart/scoreChart'
import PerformanceChart from '../../components/charts/performanceChart/performanceChart'
import SessionsChart from '../../components/charts/sessionsChart/sessionsChart'
import ActivityChart from '../../components/charts/activityChart/activityChart'

export default function Profile() {
  const data = useRouteLoaderData('root')

  return (
    <div className="dash-wrapper">
      <header>
        <div className="dash-header-title">
          <h1 className="dash-header-title-greetings">
            Bonjour{' '}
            <span className="dash-header-title-greetings__name">
              {data.firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dash-header-hidden"></div>
      </header>

      <main>
        <div className="dash-charts">
          <ActivityChart data={data.activity} />
          <div className="dash-charts__group">
            <SessionsChart data={data.weekSessions} />
            <PerformanceChart data={data.performance} />
            <ScoreChart data={data.score} />
          </div>
        </div>
        <KeyInfos data={data.keyData} />
      </main>
    </div>
  )
}

export function rootLoader({ params }) {
  const { id } = params
  const numberId = Number(id)
  const newMockStore = new MockStore(numberId)

  if (newMockStore.isUserValid) {
    const newFormat = new Format(numberId)
    return {
      keyData: newMockStore.main.keyData,
      firstName: newMockStore.main.userInfos.firstName,
      score: newMockStore.main.score ?? newMockStore.main.todayScore,
      performance: newFormat.performance,
      weekSessions: newFormat.weekSessions,
      activity: newFormat.activity,
    }
  } else {
    throw new Response(`Loader error: user with id ${id} does not exist`, {
      status: 404,
    })
  }
}
