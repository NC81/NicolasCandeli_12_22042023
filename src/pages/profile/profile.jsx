import { useLoaderData } from 'react-router-dom'
import FindMock from '../../services/find-mock'
import fetchAPI from '../../services/fetch-api'
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
            <ScoreChart data={data.todayScore ?? data.score} />
          </div>
        </div>
        <KeyInfos data={data.keyData} />
      </main>
    </div>
  )
}

export async function profileLoader({ params }) {
  const { id } = params
  const mockData = new FindMock(Number(id))
  const APIData = await fetchAPI(id)
  console.log('mockData', mockData)
  console.log('APIData', APIData)

  if (APIData.netError && mockData.error) {
    throw new Error(APIData.netError, {})
  } else if (APIData.httpError && mockData.error) {
    throw new Response('HTTP Error', {
      status: APIData.httpError.status,
      statusText: APIData.httpError.statusText,
    })
  } else if (!APIData.netError && !APIData.httpError) {
    console.log('API')
    const newUser = new User(APIData.data)
    return newUser
  } else if (!mockData.error) {
    console.log('MOCK')
    const newUser = new User(mockData.data)
    return newUser
  }
}
