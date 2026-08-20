import React, { use } from 'react'

const App = () => {

  //? clear();
  // sessionStorage.clear();
  // localStorage.clear();

  //? setItem('key','value')
  // localStorage.setItem('user','yashu');
  //  localStorage.setItem('age',18);

  //? getItem('key')
  // let user=localStorage.getItem('user');
  // console.log(user);
  // let age=localStorage.getItem('age');
  // console.log(age);

  //? removeItem('key')
  // localStorage.removeItem('user');



  //? Object Storing

  // let user={
  //   name:'yashu',
  //   age:22,
  //   city:'Bengaluru'
  // }

               // localStorage.setItem("user",user); //===> Stores like [object Object]
  
  // Should Store in the form of String so we use JSON.stringify
  // localStorage.setItem("user",JSON.stringify(user));  //===> Stores like {"name":"yashu","age":22,"city":"Bengaluru"}
  


//? When we try to retriev object from local storage which we used JSON.stringify it will return String

              // let user=localStorage.getItem('user');
              // console.log(typeof(user)); //===>String

let user=JSON.parse(localStorage.getItem('user'));
console.log(user);    //==>Object



  return (

    <div>App</div>
  )
}

export default App