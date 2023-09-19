import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div className='bg-gray-100 min-h-screen h-screen'>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
