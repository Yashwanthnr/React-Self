import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import HeroText from './HeroText'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
    <HeroText/>
    <ArrowUpRight size={60}/>
    </div>
  )
}

export default LeftContent
