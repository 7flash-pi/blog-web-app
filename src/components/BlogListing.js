import React , {useEffect, useState} from 'react'
import SingleBlog from './SingleBlog'
import { deleteBlogFromDb, getBlogFromDb } from '../utilities/request'

const BlogListing = () => {
    const [blog, setBlog] = useState([]);
    useEffect(()=>{
        getBlogFromDb()
        .then((data)=>{
            setBlog(data?.data);
        })
        
    },[])

    const deleteBlog=(item) => {
        // if(item){
        //     deleteBlogFromDb(item?.id);
        // }
    }
  return (
    <div className='flex  flex-col gap-4 max-h-[400px] overflow-scroll hide'>
        {
            (blog?.map((item,index)=>(
                <SingleBlog content={item?.content} time={item?.time} key={index} onDelete={()=>{deleteBlog(item)}}  />
            ))) 
           
        }
    </div>
  )
}

export default BlogListing