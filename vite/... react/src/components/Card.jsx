import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <img src={props.pic} alt=''/>
      <h2>{props.roll}</h2>
    </div>
  )
}

export default Card