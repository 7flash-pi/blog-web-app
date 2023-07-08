import React from 'react'
import BlogForm from '../components/BlogForm'
import BlogListing from '../components/BlogListing'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
        <BlogForm/>
        <section className=' border-[2px] p-4 rounded-lg bg-black'>
          <h3 className=' text-center text-3xl text-white '> Blogs </h3>
          <BlogListing />
        </section>



    </div>
  )
}

export default HomePage