import { useLoaderData } from 'react-router-dom'
import findMock from '../../services/find-mock'
import fetchAPI from '../../services/fetch-api'
import User from '../../models/user'
import ActivityChart from '../../components/charts/activityChart/activityChart'
import SessionsChart from '../../components/charts/sessionsChart/sessionsChart'
import PerformanceChart from '../../components/charts/performanceChart/performanceChart'
import ScoreChart from '../../components/charts/scoreChart/scoreChart'
import KeyInfos from '../../components/keyInfos/keyInfos'

export default function Profile() {
  const data = useLoaderData()
  console.log('Profile data', data)

  return (
    <main className="dash-wrapper">
      <header className="dash-header">
        <div className="dash-header-title">
          <h1 className="dash-header-title__greetings">
            Bonjour{' '}
            <span className="dash-header-title__greetings-name">
              {data.firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="dash-header-hidden"></div>
      </header>
      <div className="dash-content">
        <div className="dash-content-charts">
          <ActivityChart data={data.activity} />
          <div className="dash-content-charts__group">
            <SessionsChart data={data.averageSessions} />
            <PerformanceChart data={data.performance} />
            <ScoreChart data={data.score} />
          </div>
        </div>
        <KeyInfos data={data.keyData} />
      </div>
    </main>
  )
}

/**
 * React Router function that throws exceptions or returns user API/mock formatted data
 *
 * @param {Object} params - Object with dynamic params from URL
 * @throws {Error} - If fetchAPI() returns a network error and findMock() returns an error
 * @throws {Response} - If fetchAPI() returns an HTTP error and findMock() returns an error
 * @return {Object} User API formatted data if fetchAPI() does not return any error
 * @return {Object} User mock formatted data if fetchAPI() returns an error
 */
export async function profileLoader({ params }) {
  const { id } = params
  const mockData = findMock(Number(id))
  const APIData = await fetchAPI(id)
  console.log('mockData', mockData)
  console.log('APIData', APIData)

  if (APIData.netError && mockData.isError) {
    throw new Error(APIData.netError, {})
  } else if (APIData.httpError && mockData.isError) {
    throw new Response('HTTP Error', {
      status: APIData.httpError.status,
      statusText: APIData.httpError.statusText,
    })
  } else if (!APIData.netError && !APIData.httpError) {
    console.log('API')
    const newUser = new User(APIData.raw_data)
    return newUser
  } else if (!mockData.error) {
    console.log('MOCK')
    const newUser = new User(mockData.raw_data)
    return newUser
  }
}
