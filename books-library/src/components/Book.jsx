import React from 'react'

function Book(props) {
  return (
    <div className='book'>
      <img src={props.url} alt="WingsOfFire" height='200px'/>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Book
