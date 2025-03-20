import React from 'react'
import Controlled from './components/Controlled'
import UnControlled from './components/UnControlled'
import './App.css'
function App() {
  return (
    <div>
      <h2>controlled:</h2>
      <Controlled/>
      <h2>Uncontrolled:</h2>
      <UnControlled />
    </div>
  )
}

export default App
