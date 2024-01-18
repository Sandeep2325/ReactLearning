import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('red')

  function changecolor(color) {
    setcolor(color)
    // if (color === "Yellow") {
    //   setcolor(color)
    // } else if (color === "Green") {
    //   setcolor(color)
    // } else if (color === "Black") {
    //   setcolor(color)

    // } else {
    //   setcolor(color)

    // }
  }
  return (
    <div className='w-full h-screen duration-200 bg-black' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setcolor("Yellow")}
          //onClick={() => changecolor("Yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button
          onClick={() => setcolor("Green")}
           // onClick={() => changecolor("Green")}
           style={{backgroundColor:"Green"}}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          >Green</button>
          <button
          onClick={() => setcolor("Black")}
          style={{backgroundColor:"Black"}}
            //onClick={() => changecolor("Black")}

            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
