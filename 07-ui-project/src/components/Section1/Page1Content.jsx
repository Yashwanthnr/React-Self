import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-20 h-[90vh] px-18 flex gap-10 items-center'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
