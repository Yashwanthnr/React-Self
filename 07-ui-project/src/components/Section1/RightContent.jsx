import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex flex-nowrap gap-10 p=6 overflow-x-auto rounded-4xl'>
     
    {props.users.map((el,i) => (
             <Rightcard key={i} color={el.color} id={i} img={el.img} tag={el.tag}/>
  ))}
     
    </div>
  )
}

export default RightContent
