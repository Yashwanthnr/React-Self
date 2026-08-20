import React, { useState } from 'react'

const App = () => {


  const [title, settitle] = useState('')


  let submitHandler=(el)=>{
    el.preventDefault(); 
    console.log("Form Submitted",title);

    settitle('') 
  }

  return (
    <div>
      <form onSubmit={(el)=>{
        submitHandler(el)
      }}>
        <input type="text" value={title} onChange={(e)=>{
          settitle(e.target.value);
        }} placeholder="Enter"/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
