import { useLoaderData } from 'react-router-dom'
import MockStore from '../../services/mock-store'
import ApiStore from '../../services/api-store'
import User from '../../models/user'
import KeyInfos from '../../components/keyInfos/keyInfos'
import ScoreChart from '../../components/charts/scoreChart/scoreChart'
import PerformanceChart from '../../components/charts/performanceChart/performanceChart'
import SessionsChart from '../../components/charts/sessionsChart/sessionsChart'
import ActivityChart from '../../components/charts/activityChart/activityChart'

export default function Profile() {
  const data = useLoaderData()
  console.log('Profile data', data)

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
            <SessionsChart data={data.averageSessions} />
            <PerformanceChart data={data.performance} />
            <ScoreChart data={data.score} />
          </div>
        </div>
        <KeyInfos data={data.keyData} />
      </main>
    </div>
  )
}

export async function profileLoader({ params }) {
  console.time('loader')
  const { id } = params
  const newMockStore = new MockStore(Number(id))
  const newApiStore = new ApiStore(id)
  await newApiStore.initialize()
  console.log('newMockStore', newMockStore)
  console.log('newApiStore', newApiStore.data)

  if (newApiStore.error && newMockStore.error) {
    throw new Response(``, {
      status: newApiStore.error.status,
      statusText: newApiStore.error.statusText,
    })
  } else if (!newApiStore.error) {
    console.log('API')
    const newUser = new User(newApiStore.data)
    console.timeEnd('loader')
    return newUser
  } else if (!newMockStore.error) {
    console.log('MOCK')
    const newUser = new User(newMockStore.data)
    console.timeEnd('loader')
    return newUser
  }
}
