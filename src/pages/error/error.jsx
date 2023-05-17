import { useRouteError } from 'react-router-dom'
import Header from '../../layouts/header/header'
import Sidebar from '../../layouts/sidebar/sidebar'

export default function Error() {
  const error = useRouteError()
  // console.error('composant erreur', error)

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Sidebar />
        <div className="error-wrapper">
          <h1>{error.status}</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  )
}
