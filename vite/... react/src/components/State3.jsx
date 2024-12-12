import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const State3 = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);
  const [color, setColor] = useState("red");
  useEffect(() => {
    setDouble(count*2)
  },[count])
  
  return (
    <div>
        <h2>{count}</h2>
        <h2>{double}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <h1 >My favorite color is <span style={{color:color}}>{color}</span>!</h1>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("pink")}>Pink</button>
        <button onClick={()=>setColor("green")}>Green</button>
    </div>
  )
}

export default State3