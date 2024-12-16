import React from 'react'
import Child5 from './Child5'

const Child4 = ({studentData}) => {
  return (
    <div>
        <h2>Child4</h2>
        <Child5 studentData={studentData}/>
    </div>
  )
}

export default Child4