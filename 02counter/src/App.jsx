import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]=useState(20)
  //let counter = 23
  // const addValue=()=>{
  //   counter=counter+1
  //   console.log(counter)
  // }
  function addValue(){
    setCounter(counter+1)
    setCounter(counter+1)

    setCounter(counter+1)

    setCounter(counter+1)
    setCounter(counter+1)// All above lines will only executes one because of binding only updates the one value
    setCounter((precounter)=>precounter+1)
    setCounter((precounter)=>precounter+1)
    setCounter((precounter)=>precounter+1)
    setCounter((precounter)=>precounter+1)//Using this callback methods helps to update the value by number every line will update the value using prevcounter(previous counter value).


  }
  const removeValue=()=>{
    setCounter(counter-1)
    
  }
  return (
    <>
      <h1>Counter app {counter}</h1>
      <h2>Conter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
