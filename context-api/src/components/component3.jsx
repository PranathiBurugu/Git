import React from 'react'
import { useContext } from 'react'
import {myContext} from '../App'

function component3() {
    const {count,name}=useContext(myContext)
  return (
    <div style={{ border: "1px solid red", height: "400px", width: "400px" }}>
          <p>{count}</p>
          <p>{name}</p>
    </div>
  )
}

export default component3
