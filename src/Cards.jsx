import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='card'>
      <h1><strong class="text-black font-black">User Id:</strong> {props.userId}</h1>
      <h1><strong class="text-black font-black">ID:</strong> {props.id}</h1>
      <p><strong class="text-black font-black">Title:</strong> {props.title}</p>
      <p><strong class="text-black font-black">Body:</strong> {props.body}</p>
    </div>
  )
}

export default Cards
