import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('');
const [detail, setDetail] = useState('')

const [task, setTask] = useState([])


const submitHandler=(e)=>{
  e.preventDefault();
  // console.log(title);
  // console.log(detail);

  const copyTask=[...task];
  copyTask.push({title,detail})   
  
  setTask(copyTask);
  
  setTitle('')
  setDetail('')
}


 const deletNote=(i)=>{
  console.log("Note Deleted");
  
  const copyTask=[...task];
  copyTask.splice(i,1)

  setTask(copyTask);
 }


  return (

    <div className='h-screen  lg:flex overflow-auto bg-black text-white p-10'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex p-10 lg:w-1/2 flex-col items-start gap-6'>

        <h1 className='font-bold  text-3xl'>Add Notes</h1>
 
     {/* First Input */}
        <input value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }} className='px-5 w-full font-medium py-2 m border-2 rounded-2xl' type='text' placeholder='Enter Heading'></input>
   
    {/*Second input*/}
        <textarea value={detail} onChange={(e)=>{
          setDetail(e.target.value);
        }} type='text' className='px-5 font-medium w-full h-50 py-2 border-2 outline-none rounded-2xl' placeholder='Enter Details'></textarea>

        <button  className='bg-white active:scale-95 w-full px-5 py-2 outline-none rounded-2xl text-black '>Add Note</button>
      </form>

      <div className='lg:w-1/2  lg:border-l-2 px-10 '>
      <h1 className='text-3xl font-bold mb-2'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start h-full gap-5'>
        
        {task.map((el,i)=>{
          return <div key={i} className='h-52 w-40 flex flex-col justify-between rounded-2xl bg-cover text-black  p-4 bg-[url("https://gallery.yopriceville.com/downloadfullsize/send/14426")] '>
            <div>
              <h3 className='leading-tight text-xl font-bold py-2'>{el.title}</h3>
            <p className='leading-tight mt-2 font-medium text-gray-400'>{el.detail}</p>
            </div>

            <button onClick={()=>{
              deletNote(i);
            }} className='w-full cursor-pointer active:scale-95  bg-red-600 rounded-2xl text-sm   text-white'>Delete Note</button>
          </div>
        })}
      </div>  
      </div>
    </div>   
  )
}

export default App
