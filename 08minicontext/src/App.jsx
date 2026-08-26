import { useState } from 'react'
import UserContextProvider from './context/usercontextprovider'
import './App.css'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React with chai</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
