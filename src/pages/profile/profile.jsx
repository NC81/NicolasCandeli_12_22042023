import useParamsInt from '../../utils/hooks'
import User from '../../utils/user'
import AverageScoreChart from '../../components/averageScoreChart/averageScoreChart'
import KeyInfos from '../../components/keyInfos/keyInfos'
// import PerfChart from '../../components/perfChart/perfChart'

export default function Profile() {
  const id = useParamsInt()
  const newUser = new User(id)
  const { score, todayScore } = newUser.main
  const { firstName } = newUser.main.userInfos
  const { keyData } = newUser.main

  return (
    <div className="db-wrapper">
      <header className="db-header">
        <h1 className="db-header-title">
          Bonjour{' '}
          <span className="db-header-title__first-name">{firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <main>
        <AverageScoreChart data={score ?? todayScore} />
        <KeyInfos data={keyData} />
        {/* <PerfChart data={formatPerformance} /> */}
      </main>
    </div>
  )
}
