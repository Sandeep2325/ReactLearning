import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')
  const passwordref = useRef(null)
  const generatepassword = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str + "~!@#$%^&*(_+"
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatepassword()
  }, [length, numberAllowed, charAllowed])
  
  const copypasswordtoclipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()

  }
  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copypasswordtoclipboard}
        >Copy</button>


      </div>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='range'
            min={6}
            max={20}
            className='outline-none w-full py-1 px-3'
            value={length}
            onChange={(e) => setlength(e.target.value)}
          />
          <label htmlFor='length'>Length: {length}</label>
        </div>


      </div>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='checkbox'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            className='outline-none w-full py-1 px-3'
          />
          <p>Numbers</p>
        </div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='checkbox'
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }}
            className='outline-none w-full py-1 px-3'
          />
          <p>Characters</p>
        </div>

      </div>

    </div>

  )
}

export default App
