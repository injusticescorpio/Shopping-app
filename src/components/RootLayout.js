import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBarPanel';

function RootLayout() {
  return (
    <div className="App">
        <NavBar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout