import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset } from './redux/actions'
import './App.css'
function App() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.count)
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>dispatch(increment)}>+</button>
      <button onClick={()=>dispatch(decrement)}>-</button>
      <button onClick={()=>dispatch(reset)}>reset</button>
    </div>
  )
}

export default App
