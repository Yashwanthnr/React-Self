import React from 'react'

const App = () => {
  
const valChange=(val)=>{
  console.log(val);
  
}



  return (
    <div>
      <input onChange={(el)=>{
        valChange(el.target.value);
      }} type='text' placeholder='Enter'></input>
    </div>
  )
}

export default App