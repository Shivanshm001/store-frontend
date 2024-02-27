import React from 'react'
import { NavBar } from 'components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer/Footer'

export default function Layout() {
  return (
    <div className='min-h-screen'>
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
