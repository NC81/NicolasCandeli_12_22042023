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
 * React Router loader function that throws exceptions and provides user formatted data
 *
 * @param {Object} params - Object with dynamic params from URL
 * @throws {Error} - If a network error has occured and mock service has not found user
 * @throws {Response} - If an HTTP error has occured and mock service has not found user
 * @returns {Object} User API formatted data if API service has found user
 * @returns {Object} User mock formatted data if mock service has found user
 */
export async function profileLoader({ params }) {
  const { id } = params
  const mockData = findMock(Number(id))
  const APIData = await fetchAPI(id)

  if (APIData.netError && mockData.isError) {
    throw new Error(APIData.netError, {})
  } else if (APIData.httpError && mockData.isError) {
    throw new Response('HTTP Error', {
      status: APIData.httpError.status,
      statusText: APIData.httpError.statusText,
    })
  } else if (!APIData.netError && !APIData.httpError) {
    const newUser = new User(APIData.raw_data)
    console.log('API data', newUser)
    return newUser
  } else if (!mockData.isError) {
    const newUser = new User(mockData.raw_data)
    console.log('MOCK data', newUser)
    return newUser
  }
}
