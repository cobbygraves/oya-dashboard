'use client'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { useState, useContext } from 'react'
import { AuthConstext } from './components/Providers'

export default function Home() {
  // const [auth, setAuth] = useState(true)
  const authCTX = useContext(AuthConstext)
  return (
    <div className='h-screen'>
      {authCTX?.user?.username !== '' ? <Dashboard /> : <Login />}
    </div>
  )
}
