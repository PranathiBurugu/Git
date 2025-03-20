import React from 'react'

export default function Product({pname,image,price,display}) {

  return (
    <div className='product'>
        <img src={image} alt={pname} height='200' />
        <h4>{pname}</h4>
      <p>price: {price}</p>
      <button onClick={()=>display(pname)}>Add to cart</button>
    </div>
  )
}


