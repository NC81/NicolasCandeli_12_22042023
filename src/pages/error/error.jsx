import { useRouteError } from 'react-router-dom'
import Header from '../../layouts/header/header'
import Sidebar from '../../layouts/sidebar/sidebar'

export default function Error() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        <div className="error-wrapper">
          <h1>{error.status}</h1>
          <p>Désolé, une erreur inattendue est survenue.</p>
        </div>{' '}
      </div>
    </>
  )
}
