import React from 'react'
import Book from './Book'

function BookLine() {
    let books=[
        {
            title:"wings of fire",
            url:"https://www.indicinspirations.com/cdn/shop/products/wings-of-fire-an-autobiography-of-abdul-kalam-books-908170.jpg?v=1627154447&width=565"
        },
        {
            name: "secret",
            url: "https://m.media-amazon.com/images/I/91YmLCKgJuL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "monk who sold his ferrari",
            url: "https://m.media-amazon.com/images/I/61OByUf1TfL.jpg",
        },
        {
            name: "Unlocking unicorn secrets",
            url: "https://m.media-amazon.com/images/I/51ObKo3jXKL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "Atomic Habits",
            url: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
        },
        {
            name: "secret",
            url: "https://m.media-amazon.com/images/I/91YmLCKgJuL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "monk who sold his ferrari",
            url: "https://m.media-amazon.com/images/I/61OByUf1TfL.jpg",
        },
        {
            name: "Unlocking unicorn secrets",
            url: "https://m.media-amazon.com/images/I/51ObKo3jXKL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "Atomic Habits",
            url: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
        },

    ]
  return (
    <div className='bookLine'>
      {
        books.map((v)=>
        (
            <Book title={v.title} url={v.url} />
        )
        )
      }
    </div>
  )
}

export default BookLine
