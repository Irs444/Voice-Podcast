import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className="mt-5 pt-3">
        <Outlet/>
        </div>
    </div>
  )
}

export default Main