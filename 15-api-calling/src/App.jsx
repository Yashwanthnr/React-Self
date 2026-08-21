import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

    // async function getData() {
    //     const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');

    //     console.log(response); 
    // }


    // const getData= async()=>{
    //   const respone= await fetch('https://jsonplaceholder.typicode.com/users');

    //   const data=await respone.json();
    //   console.log(data);
    // }



    const [data, setData] = useState([]);


    const getData= async ()=>{
      const respone= await axios.get('https://picsum.photos/v2/list');
      // console.log(respone.data  );

      setData(respone.data);


    //? DeStructuring
    //  const {data}= await axios.get('https://jsonplaceholder.typicode.com/users');
    //  console.log(data  );
    }





  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((el,i)=>{
          return <h1>hello,{i},{el.author}</h1>
        })}
      </div>


    </div>
  )
}

export default App