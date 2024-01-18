import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header first='Sandeep' second='Pradeep' third='Manju'/>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username="sandeep" post="Software Engineer"/>
      <Card username='Pradeep'/>
      <Card username='Suresh'/>

    </>
  )
}

export default App
