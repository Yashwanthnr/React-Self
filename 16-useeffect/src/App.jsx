// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('useEffect Running....');
    
//   },[num])

//   // Only Runs When num state changes Because num is dependency for useEffect
  

//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2  {num2}</h1>
//       <button onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+1)
//       }}>click</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)


  function aChanging(){
    console.log("A is Changing");  
  }

  function bchanging(){
    console.log("B is Changing");  
  }

  useEffect(function(){
    aChanging();
  },[a])



  return (
    <div>

      <h1>A:{a}</h1>
      <h1>B:{b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Inc A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Dec B</button>
    </div>
  )
}

export default App