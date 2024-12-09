import React from 'react'
import blogPostData from './blogpostdata'

const BlogPost = () => {
  return (
    <div>
      <div>
        {blogPostData.map((item) => {
            return <div>
                <div>
                    <div>
                        <img src={item.pic} alt="" />
                    </div>
                    <div className='flex  gap-6 mt-7'>
                            <div className='flex items-center  gap-2'>
                                <img src="/assets/icons/pen.png" alt="sabir" />
                                <h6 className=' bg-lightPink px-6 rounded-sm text-navy font-medium'>Surf Auxion</h6> 
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src="/assets/icons/calendar.png" alt="" />
                                <h6 className='bg-lightYellow2 px-6 rounded-sm text-navy font-medium'>Aug 09 2020</h6>
                            </div>
                            
                    </div>

                    <div className='mt-6'>
                        <a className='font-semibold text-navy font-josefin text-[30px] ' href={item.href}>{item.title}</a>
                        <p className='text-tertiary lg:w-[78%] mt-5 '>{item.des}</p>
                        <h6 className='font-semibold text-navy mt-7 mb-6'>{item.footer}</h6>
                    </div>
                </div>
            </div>
        })}
      </div>

      <div className='flex items-center justify-center '>
        <h4 className='bg-pink px-3 rounded-sm text-white font-lato'>1</h4>
        <h4 className='border-2 px-3  rounded-sm text-tertiary font-lato mx-10'>2</h4>
        <h4 className='border-2 px-3  rounded-sm text-tertiary font-lato '>3</h4>
        <h4 className='border-2 px-3  rounded-sm text-tertiary font-lato mx-10'>4</h4>
      </div>
      
    </div>
  )
}

export default BlogPost