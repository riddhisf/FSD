import React from 'react'

const Child5 = ({studentData}) => {
  return (
    <div>
        <h2>Child5</h2>
        <p>Name: {studentData.name}</p>
        <p>Roll: {studentData.roll}</p>
    </div>
  )
}

export default Child5