import useParamsInt from '../../utils/hooks'
import User from '../../utils/user'
import ScoreChart from '../../components/averageScoreChart/scoreChart'
import KeyInfos from '../../components/keyInfos/keyInfos'
import PerfChart from '../../components/perfChart/perfChart'
import SessionsChart from '../../components/sessionsChart/sessionsChart'

export default function Profile() {
  const id = useParamsInt()
  const newUser = new User(id)
  const { score, todayScore } = newUser.main
  const { firstName } = newUser.main.userInfos
  const { keyData } = newUser.main
  const { performance } = newUser
  const { weekSessions } = newUser
  console.log('Profile newUser', newUser)

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
        <ScoreChart data={score ?? todayScore} />
        <KeyInfos data={keyData} />
        <PerfChart data={performance} />
        <SessionsChart data={weekSessions} />
      </main>
    </div>
  )
}
