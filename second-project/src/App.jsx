import React from 'react'
import { useState } from 'react';
function App() {
  const [c,setCount] = useState(0)

  return (
    <div>
      <p>{c}</p>
      <button onClick={()=>setCount(c+1)}>+</button>
    </div>
  )
}

export default App