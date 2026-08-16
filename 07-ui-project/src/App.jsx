import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

const users=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'blue',
    tag:'Satisfied'
  },{
    img:'https://plus.unsplash.com/premium_photo-1661717805091-5821cc62004a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'red',
    tag:'Underserved'
  },{
    img:'https://images.unsplash.com/photo-1762558978948-5afd36e6343d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    color:'blue',
    tag:'Underbanked'
  },{
    img:'https://images.unsplash.com/photo-1546979859-b7d45d499dd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjAlNUJwcm9mZXNpb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'blue',
    tag:'Underbanked'
  }
]

  return (
    <div >
       <Section1 users={users}/>
       <Section2/>
    </div>
  )
}

export default App
