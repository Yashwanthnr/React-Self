import React from 'react'

const App = () => {

  let submitHandler=(e)=>{
    e.preventDefault(); 
    console.log("Submitted");
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
