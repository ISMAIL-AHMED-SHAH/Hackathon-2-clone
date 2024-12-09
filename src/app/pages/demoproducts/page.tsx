import React from 'react'
import demoProductData from './demoproductdata'

const DemoProduct = () => {
  return (
    <div className='md:mt-44 mt-12'>
      <div >
        {demoProductData.map((item) => {
            return <div>
                        <div className='flex gap-4 mb-4 items-center'>
                        <div>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='flex items-center justify-between '>
                            <div>
                                <h4 className='text-[14px] font-semibold'>{item.title}</h4>
                                <h5 className='text-tertiary'>color:{item.color}</h5>
                                <h5 className='text-tertiary'>Size:{item.size}</h5>
                            </div>
                            <div className='w-[160px] text-right'>
                                <h4>{item.price}</h4>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className=' border-[1px] mb-4'></div>
            </div>
            
        })}
      </div>

            <div className="bg-dark_sky_blue py-9 px-6 mt-6 mb-12">
                <div className=''>
                    <div className='text-navy flex items-center justify-between'>
                        <h3>Subtotals:</h3>
                        <h4>£219.00</h4>
                    </div>
                    <div className='md:w-[350px] border-[1px] mt-2'></div>
                </div>

                <div className='mt-9'>
                    <div className='text-navy flex items-center justify-between'>
                        <h3>Totals:</h3>
                        <h4>£325.00</h4>
                    </div>
                    <div className='md:w-[350px] border-[1px] mt-2'></div>
                </div>

                <div className='flex items-center mt-7 gap-1 text-tertiary'>
                    <input className='bg-lightGreen text-lightGreen w-[8px] h-[8px]' type="checkbox" name="" id="" />
                    <h6 className='text-[12px]'>Shipping & taxes calculated at checkout</h6>
                </div>

                <button className='w-full mt-11 font-lato font-medium checkout-btn'>Proceed To Checkout</button>

            </div>
    </div>
  )
}

export default DemoProduct