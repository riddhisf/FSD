import React, { useContext } from 'react'
import { StudentContext } from '../App4.jsx'

const Child6 = () => {
    const {name,roll}= useContext(StudentContext);
  return (
    <div>
        <h2>Child6</h2>
        <p>Name: {name}</p>
        <p>Roll: {roll}</p>

    </div>
  )
}

export default Child6