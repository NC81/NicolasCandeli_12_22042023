import { useParams } from 'react-router-dom'
import AverageScoreChart from '../../components/averageScoreChart/averageScoreChart'

import {
  findMockUserMainData,
  // findMockUserActivity,
  // findMockUserAverageSessions,
  // findMockUserPerformance,
} from '../../services/findUserData/mock'

export default function Profile() {
  const { id } = useParams()
  console.log(
    findMockUserMainData(id)
    // findMockUserActivity(id),
    // findMockUserAverageSessions(id),
    // findMockUserPerformance(id)
  )
  const { userInfos } = findMockUserMainData(id)
  const score =
    findMockUserMainData(id).todayScore ?? findMockUserMainData(id).score

  return (
    <div className="db-wrapper">
      <header className="db-header">
        <h1 className="db-header-title">
          Bonjour{' '}
          <span className="db-header-title__first-name">
            {userInfos.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <main>
        <AverageScoreChart score={score} />
      </main>
    </div>
  )
}
