import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-gray-100 min-h-screen h-screen'>
      <NavBar />
      <Outlet />
    </div>
  )
}
