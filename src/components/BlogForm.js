import React, { useEffect, useState } from 'react'
import {BsFillSendFill} from 'react-icons/bs'
import { postBlogToDb } from '../utilities/request';

const BlogForm = () => {

  const [postBlog, setPostBlog] = useState({
    id:'',
    content:'',
    time:new Date(),
  });

  const onPostblog = () =>{
    if(postBlog){
      postBlogToDb(postBlog);
      }
      
    setPostBlog({
      id:'',
      content:''
    });
  }
   
    useEffect(()=>{},[postBlog])
 
  
  return (
    <div className=' flex flex-col p-4'>
      <section className='mt-[5em] rounded-lg border-[2px] p-4  '>
      <textarea id="w3review" name="w3review" rows="3" cols="50" 
      placeholder='Post your Blog...' 
      value={postBlog.content} 
      onChange={(e)=>{ setPostBlog({id:new Date().getTime().toString(),
      content:e.target.value,
    time:new Date().toJSON().slice(0, 10)})
      }} />
      </section>
     
     <div className='flex flex-row  items-center justify-end '>
     <button className='w-[100px] flex items-center gap-4 mt-4 bg-black text-white p-2 rounded-lg'
     onClick={onPostblog} >
        <BsFillSendFill size={15}/>
        Post
      </button>
     </div>

    </div>
  )
}

export default BlogForm