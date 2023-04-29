import AverageScoreChart from '../../components/averageScoreChart/averageScoreChart'
import KeyInfos from '../../components/keyInfos/keyInfos'
import useParamsInt from '../../utils/hooks'
import {
  findMockUserMainData,
  // findMockUserActivity,
  // findMockUserAverageSessions,
  // findMockUserPerformance,
} from '../../services/findUserData/mock'

export default function Profile() {
  const id = useParamsInt()
  const { userInfos } = findMockUserMainData(id)
  console.log(
    findMockUserMainData(id)
    // findMockUserActivity(id),
    // findMockUserAverageSessions(id),
    // findMockUserPerformance(id)
  )

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
        <AverageScoreChart id={id} />
        <KeyInfos id={id} />
      </main>
    </div>
  )
}
