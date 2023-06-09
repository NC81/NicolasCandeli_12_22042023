import { Outlet } from 'react-router-dom'
import Header from './header/header'
import Sidebar from './sidebar/sidebar'

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}
