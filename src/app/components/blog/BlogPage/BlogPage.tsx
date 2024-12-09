import React from 'react'
import BlogHistory from './BlogHistory/BlogHistory'
import BlogPost from './BlogPost/BlogPost'

const BlogPage = () => {
  return (
    <>

        <div className='bg-shade2'>
            <div className="lg:container lg:px-[1.3rem] px-[.8rem] pt-[98px]">
                <h2 className='text-navy'>Blog Page</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . Blog Page</h4>
                </div>
            </div>
        </div>


        <div className='lg:container lg:px-[1.3rem] px-[.8rem] lg:flex lg:mt-32 lg:mb-20 mt-12' >

            <div className='w-full '>
                <BlogPost/>
            </div>

            <div className='lg:w-[450px] '>
                <BlogHistory/> 
            </div>

        </div>

        <div className='flex justify-center lg:mb-32 mb-8'>
            <img src="/assets/images/logo1.png" alt="" />
        </div>
    </>
    
  )
}

export default BlogPage