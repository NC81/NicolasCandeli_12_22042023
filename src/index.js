import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { profileLoader } from './pages/profile/profile'
import Error from './pages/error/error'
import Layout from './layouts/layout'
import Profile from './pages/profile/profile'
import './styles/main.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: 'profile/:id',
        element: <Profile />,
        loader: profileLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
