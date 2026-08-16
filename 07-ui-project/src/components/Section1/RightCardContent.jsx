import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute  top-0 left-0 h-full  w-full p-8 flex  flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semiboldbold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white mt-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea voluptas, suscipit assumenda vero fuga!</p>
     </div>

         <div className='flex  justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white  font-medium px-6 py-3 rounded-full  '>{props.tag}</button>
            <button style={{backgroundColor:props.color}}  className=' text-white  font-medium px-3 py-2 rounded-full  '><ArrowRight /></button>
         </div>
     </div>
  )
}

export default RightCardContent
