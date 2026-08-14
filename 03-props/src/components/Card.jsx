import React from 'react'

const Card = (props) => {

  // console.log(props.user);
  
  return (
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <h1>{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button type='submit'>View profile</button>
      </div>
  )
}

export default Card
