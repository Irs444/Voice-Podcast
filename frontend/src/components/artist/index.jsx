import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Artist = () => {
  return (
    <div>
       {/* <Navbar/> */}
       <Outlet/> 
    </div>
  )
}

export default Artist