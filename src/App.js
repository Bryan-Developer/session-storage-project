import React, { useContext } from 'react'
import { Redirect, Router } from '@reach/router'
import { Context } from './context'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
export const App = () => {
  const autorizacion = useContext(Context)
  return (
    <Router>
      {
        !autorizacion && <Login path='/login' />
      }
      {
        !autorizacion && <Redirect from='/' to='/login' noThrow />
      }
      <Home path='/' />
    </Router>
  )
}
