
import React from 'react'
import RightCardContent from './RightCardContent'

const Rightcard = (props) => {
    
    
  return (
    <div className='h-full shrink-0 w-70 rounded-4xl relative overflow-hidden'>
      <img className='h-full w-full object-cover'  src={props.img} />
     
        <RightCardContent id={props.id} color={props.color} tag={props.tag}/>

       
       </div>
  )
}
 
export default Rightcard
