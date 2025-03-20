import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import component1 from './components/component1'

const myContext = createContext(0)
function App() {
  const [c,setCount] = useState(0)
  const [name,setName] = useState('')
  return (
    <div>
      <myContext.Provider value={{c,name}}>
        <div>
          <component1 />
        </div>
      </myContext.Provider>
    </div>
  )
}

export {myContext}
export default App
