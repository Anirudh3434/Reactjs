import { useContext, useState } from 'react'
import UserContext from './Context/UserContext'
import Login from './Component/Login'
import Profile from './Component/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvidor'


function App() {





  return (
   <UserContextProvider >
      <Login/>
      <Profile/>
  
   </UserContextProvider >
  )
}

export default App
