import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import ProductContextProvider from './Context/Products/ProductContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <ProductContextProvider>
      <h1>React video for context API</h1>
      <Login/>
      <Profile/>
      </ProductContextProvider>
    </UserContextProvider>
  )
}

export default App
