import React from 'react'
import Child3 from './components/Child3';

const App3 = () => {
    const studentData={
        name:"Riddhi",
        roll:"2200320230034"
    };
  return (
    <div>App3
    <Child3 studentData={studentData}/>
    </div>
  )
}

export default App3