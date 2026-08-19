import React from 'react'
import { useState } from 'react'


//! Counter Using useState
// const App = () => {
//   const [count, setcount] = useState(0);

// function increase(){
//   setcount(count+1);
// }

// function decrease(){
//   setcount(count-1);  
// }

// function jump5Count(){
//   setcount(count+5);  
// }
//   return (
//     <div>
//       <h1>Counter</h1>
//       <h2>{count}</h2>
//       <div className='btn'>
//         <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//        <button onClick={jump5Count}>Jump By 5</button>
        
//       </div>      
//     </div>
//   )
// }



//! Object Modification By UseState
// const App = () => {

//   const [user, setuser] = useState({name:'yashu',age:22});

//   let btnClick=()=>{
//     const newUser={...user};
//     newUser.name='Sri';
//     newUser.age=21;
//     setuser(newUser);

//   }

//   return (
//     <div>
//       <h1>{user.name},{user.age}</h1>
//       <button onClick={btnClick}>click</button>
//     </div>
//   )
// }




//! Array Modification Using useState
// const App = () => {

//   const [arr, setarr] = useState([10,20,30,40]);

//   let arrMod=()=>{
//     const newArr=[...arr];
//     newArr.push(50);
//     setarr(newArr);
//   }

//   return (
//     <div>
//       <h1>{arr}</h1>
//       <button onClick={arrMod}>click</button>
//     </div>
//   )
// }



//! Batch Update

const App = () => {

const [num, setNum] = useState(10)

const btnClick=()=>{
  // setNum(num+1);
  // setNum(num+1);
  // setNum(num+1);  Even if there are Three Increments Only One Will Work

  setNum(prev=>(prev+1));
  setNum(prev=>(prev+1));
  setNum(prev=>(prev+1));
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>click</button>
    </div>
  )
}






export default App