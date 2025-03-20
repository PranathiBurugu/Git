import React, { useCallback, useState } from 'react'
import HookUseCallback from '../components/HookUseCallback'

function App() {
  const [count , setCount] = useState(0)
  const msg = useCallback(()=>
  {
    console.log("hello world")
  },[])
  return (
    <div>
      <p>{count}</p>
      <HookUseCallback msg={msg}/>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default App
