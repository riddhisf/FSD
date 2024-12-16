import React, { createContext } from 'react'
import Child6 from './components/Child6';

const StudentContext=React.createContext();
const App4 = () => {
    const studentData={
        name:"Riddhi",
        roll:"2200320230034"
    };
  return (
    <div>
        <h2>App4</h2>
        <StudentContext.Provider value={studentData}>
            <Child6/>
        </StudentContext.Provider>
    </div>
  )
}

export default App4;
export {StudentContext};