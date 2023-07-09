import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const SingleBlog = ({content,time,onDelete,title}) => {
  return (
    <div className='flex flex-col p-4 bg-gray-500 rounded-lg mt-4' id='main'>
       <h2 className='text-4xl text-[#B2DFEE]'>{title}</h2>
     <div className='flex flex-col py-2'>
        <p className='text-xl text-white'>{content}</p>
        <p className='opacity-40 text-sm text-white'>{time}</p>
     </div>
     <section className='flex justify-end '>
     <button className='w-[100px] flex items-center gap-2 mt-4 bg-white text-[#A30C19] p-2 rounded-lg border-[1px] border-[#A30C19]'
     onClick={onDelete}>
            <AiFillDelete size={14}/>
            Delete
        </button>
     </section>
     

    </div>
  )
}

export default SingleBlog