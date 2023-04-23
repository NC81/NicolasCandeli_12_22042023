import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/error'
import Layout from './layouts/layout'
import Profile from './pages/profile'
import './index.css'

const router = createBrowserRouter([
  {
    path: 'user/:id',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)