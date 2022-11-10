import { createContext } from 'react'
import React from 'react'
import { useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

  const[isAuth , setIsAuth] =  useState(false)
  const[tokenName , setTokenName] =  useState(false)
  const[nameDis , setNameDis] = useState("")

  // const registrationSuccess = () => {
     
  // }

  const LoginSuccess = (name) => {
    
    setIsAuth(true)
    setNameDis(name)
  }
  // console.log(nameDis)
  return (
     <>
      <AuthContext.Provider value={{LoginSuccess , nameDis , isAuth}} >{children}</AuthContext.Provider>
     </>
  )
}