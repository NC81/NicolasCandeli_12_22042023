import { useRouteLoaderData } from 'react-router-dom'
import ApiStore from '../../services/api-store'
import MockStore from '../../services/mock-store'
import KeyInfos from '../../components/keyInfos/keyInfos'
import ScoreChart from '../../components/charts/scoreChart/scoreChart'
import PerformanceChart from '../../components/charts/performanceChart/performanceChart'
import SessionsChart from '../../components/charts/sessionsChart/sessionsChart'
import ActivityChart from '../../components/charts/activityChart/activityChart'

export default function Profile() {
  const data = useRouteLoaderData('root')
  console.log('Profile data', data)
  const { firstName, activity, averageSessions, performance, score, keyData } =
    data

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
            <SessionsChart data={averageSessions} />
            <PerformanceChart data={performance} />
            <ScoreChart data={score} />
          </div>
        </div>
        <KeyInfos data={keyData} />
      </main>
    </div>
  )
}

export async function rootLoader({ params }) {
  const { id } = params
  const newApiStore = new ApiStore(id)
  const newMockStore = new MockStore(Number(id))
  await newApiStore.initialize()

  if (!newApiStore.isUserValid && !newMockStore.isUserValid) {
    throw new Response(`Loader error: user with id ${id} does not exist`, {
      status: 404,
    })
  } else if (newApiStore.isUserValid) return newApiStore
  else if (newMockStore.isUserValid) return newMockStore
}
