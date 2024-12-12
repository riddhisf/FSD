import React, { useState } from 'react'
import pic1 from '../images/Riddhi.jpg';

const Task2 = () => {
    const [height, setheight] = useState(100)
    const [width, setwidth] = useState(100)
  return (
    <div>
        <img style={{height:height}} src='pic1' alt=''/>
        <button onClick={()=>setheight(height=200)}>Height</button>
        <button onClick={()=>setwidth(width=200)}>Width</button>

    </div>
  )
}

export default Task2