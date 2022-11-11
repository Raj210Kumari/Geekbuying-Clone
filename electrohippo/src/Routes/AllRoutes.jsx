import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'

function AllRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/registration' element={<Registration/>} />
    </Routes>
    </>
  )
}

export default AllRoutes