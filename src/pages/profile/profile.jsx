import { useRouteLoaderData } from 'react-router-dom'
import ApiStore from '../../services/stores/api-store'
import MockStore from '../../services/stores/mock-store'
import User from '../../services/user/user'
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
  const newMockStore = new MockStore(Number(id))
  const newApiStore = await new ApiStore(id).initialize()
  // console.log('newMockStore', newMockStore)
  // console.log('newApiStore', newApiStore)

  if (newMockStore.length === 0 && newApiStore.length === 0) {
    throw new Response(`Loader error: user with id ${id} does not exist`, {
      status: 404,
    })
  } else if (newApiStore.length === 4) {
    console.log('newApiUser')
    const newApiUser = new User(...newApiStore)
    return newApiUser
  } else if (newMockStore.length === 4) {
    console.log('newMockUser')
    const newMockUser = new User(...newMockStore)
    return newMockUser
  }
}
