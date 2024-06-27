import React from 'react'
import './App.css';
import HashLoader from "react-spinners/HashLoader";
import { useState ,useEffect } from 'react'

function App() {
  const [loading , setLoading]= useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)

    }, 3500)
  }, [])
  return (
    <div className='App'>
      {
        loading ?
        <HashLoader
        color={'#198754'}
        loading={loading}
        size={100}  />
        :
      <div></div>
      }
    </div>
  )
}

export default App