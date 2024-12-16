import React from 'react'
import Child4 from './Child4'

const Child3 = ({studentData}) => {
  return (
    <div>
        <h2>Child3</h2>
        <Child4 studentData={studentData}/>
    </div>
  )
}

export default Child3