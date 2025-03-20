import React from 'react'
import component2 from './component2'
function component1() {
  return (
    <div style={{ border: "1px solid red", height: "400px", width: "400px" }}>
        <component2 />      
    </div>
  )
}

export default component1
