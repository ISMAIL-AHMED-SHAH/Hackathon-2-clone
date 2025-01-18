import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import  { FiHeart} from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import RatingStar from '@/app/components/RatingStar/page';


interface IProduct {
    id : number,
    name : string,
    price : number,
    discountprice ?: number,
    image : string,
    height : number,
    width : number,
    category : string  
}

interface ProductPostParams {
    params: {
      id: string;
    };
  }
async function singleProductPage({ params }: ProductPostParams) {
    const {id} = params;


    const res = await fetch('https://next-ecommerce-template-4.vercel.app/api/product');
    const data: IProduct[] = await res.json();
    console.log("Data ==>>", data);

 
     let  product = data.find((item:IProduct) => item.id === parseInt(id));

  if (!product) {
    console.error(`Product not found!`);
    return null;
  }
  
    console.log("Product ==>>", product);



  return (
    <div>
      <main className='bg-maingray w-full h-[266px] flex items-center mx-auto'>
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
            <h1 className="text-headingsText text-[36px] leading-[42.19px] text-center lg:text-left font-semibold">Product Details</h1>
            <p className= "font-medium text-[16px] leading-[19.2px] text-center lg:text-left text-black">Home. Page. <span className='text-secondary'>Product details</span></p>
        </div>
      </main>

      <div className="bg-white mx-auto md:mx-10 lg:mx-[200px] 2xl:mx-default-margin shadow-lg my-16 lg:my-32  px-3 py-2">
        <div className='flex flex-col lg:flex-row mx-auto items-center '>
            <div className="space-x-3 space-y-3  hidden md:block ">
                <div className=" h-[100px] w-[100px] rounded-[3px] 2xl:h-[155px] 2xl:w-[151px] items-center"> 
                     <Image src={product.image} alt={product.name} height={product.height} width={product.width} className={`h-[${product.height}px] w-[${product.width}px] object-cover mx-auto `}/>
                </div>
                <div className=" h-[100px] w-[100px] rounded-[3px] 2xl:h-[155px] 2xl:w-[151px] items-center"> 
                     <Image src={product.image} alt={product.name} height={product.height} width={product.width} className={`h-[${product.height}px] w-[${product.width}px] object-cover mx-auto `}/>
                </div>
                <div className=" h-[100px] w-[100px] rounded-[3px] 2xl:h-[155px] 2xl:w-[151px] items-center"> 
                     <Image src={product.image} alt={product.name} height={product.height} width={product.width} className={`h-[${product.height}px] w-[${product.width}px] object-cover mx-auto `}/>
                </div>

            </div>
            <Image
            src={product.image} 
            alt='img'
            height={487}
            width ={325} 
            className= {`h-[${487}px] w-[${375}px] rounded-[3px]`}/>

           <div className='ml-4 lg:ml-8  '>
            <h1 className='text-[36px] leading-[42.19px] '>{product.name}</h1>
            <div className='flex gap-3 items-center mt-3'>
              <RatingStar rating={5}/>
               <div className='text-headingsText text-[14px] leading-[29px]'> (22) </div>
            </div>
            <p className='flex gap-2 text-headingsText text-[14px] leading-[29px] my-2'>${product.price} <span className='text-secondary line-through'>${product.discountprice}</span></p>
            <h3 className='text-headingsText text-[16px] leading-[18.75px] my-2'>Color</h3>

            <p className='text-[16px] leading-[29px] text-[#A9ACC6] max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

            <h3 className='text-headingsText text-[16px] leading-[29px] flex ml-7 gap-2 items-center '>Add To cart <span>< FiHeart /></span></h3>

            <h3 className='text-headingsText text-[16px] leading-[18.75px] my-2'>Categoriese</h3>
            <h3 className='text-headingsText text-[16px] leading-[18.75px] my-2'>Tags</h3>
            <h3 className='text-headingsText text-[16px] leading-[18.75px] my-2 flex gap-2'>Share 
                
            <span className='flex gap-2'>
            <FaFacebook className='bg-headingsText text-white text-sm rounded-full'/>
            <FaInstagram className='bg-secondary text-white text-sm rounded-full'/>
           <FaTwitter className='bg-headingsText text-white text-sm rounded-full'/>    
            </span></h3>

        </div>
        </div>
      </div>

      <div className="h-auto lg:h-[549px] 2xl:h-[649px] py-3 2xl:flex 2xl:items-center  w-full bg-maingray ">
      <div className="2xl:mx-default-margin lg:mx-[200px] mx-4">
        <ul className='text-headingsText underline decoration-solid text-base md:text-lg lg:text-[24px] lg:leading-[28.13px] flex mx-auto lg:mx-0 gap-2 md:gap-5 lg:gap-[30px] my-4 lg:my-8'>
          <li>Description</li>
          <li>Additional Info</li>
          <li>Reviws</li>
          <li>Video</li>
        </ul>

        <h3 className='text-headingsText underline solid text-xl 2xl:text-[22px] 2xl:leading-[25.78px] '>Varius tempor</h3>
        <p className='text-[16px] leading-[29px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

        <h3 className='text-headingsText underline solid text-base 2xl:text-[22px] 2xl:leading-[25.78px] my-3'>More Details</h3>
        <ul>
            <li className='flex gap-2'> <FaArrowRight className='text-md'/> <p className='text-[16px] leading-[29px] text-[#A9ACC6] w-full'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
            <li className='flex gap-2'> <FaArrowRight className='text-md' /> <p className='text-[16px] leading-[29px] text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
            <li className='flex gap-2'> <FaArrowRight className='text-md'/> <p className='text-[16px] leading-[29px] text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
            <li className='flex gap-2'> <FaArrowRight  className='text-md'/> <p className='text-[16px] leading-[29px] text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
        </ul>

  </div>
         </div>

       <div className=' mx-auto lg:mx-[200px] 2xl:mx-default-margin my-36 '>
       <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10">
          Related Products
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-[20px] lg:my-24 justify-center mx-5'>
            <div className="h-auto lg:h-[300px] 2xl:h-[380px] w-full mx-auto">
                <Image src={'/related-1.jpg'}  alt='image' width={270} height={340} className="h-[340px] w-[270px] rounded-[3px] object-cover"  />

                <div className='my-3 flex justify-between '>
                <div className=" ">
                <h1 className=' text-headingsText text-[16px] leading-[18.75px]'>Mens Fashion Wear</h1>
                <p className='text-[13px] leading-[15.23px] mt-1'>$43.00</p>
                </div>
                <RatingStar rating={5} />
            </div>
            </div>

            <div className="h-auto lg:h-[300px] 2xl:h-[380px] w-full mx-auto">
                <Image src={'/related-2.jpg'}  alt='image' width={270} height={340} className="h-[340px] w-[270px] rounded-[3px] object-cover"  />

                <div className='my-3 flex justify-between '>
                <div className=" ">
                <h1 className=' text-headingsText text-[16px] leading-[18.75px]'>Womens Fashion Wear</h1>
                <p className='text-[13px] leading-[15.23px] mt-1'>$43.00</p>
                </div>
                <RatingStar rating={5} />
            </div>
            </div>

            <div className="h-auto lg:h-[360px] 2xl:h-[380px] w-full mx-auto ">
                <Image src={'/related-3.jpg'}  alt='image' width={270} height={340} className="h-[340px] w-[270px] rounded-[3px] object-cover"  />

                <div className='my-3 flex justify-between '>
                <div className=" ">
                <h1 className=' text-headingsText text-[16px] leading-[18.75px]'>Walx Dummy fashion</h1>
                <p className='text-[13px] leading-[15.23px] mt-1'>$43.00</p>
                </div>
                <RatingStar rating={5} />
            </div>
            </div>

            <div className=" h-auto lg:h-[300px] 2xl:h-[380px] w-full mx-auto">
                <Image src={'/related-4.jpg'}  alt='image' width={270} height={340} className="h-[340px] w-[270px] rounded-[3px] object-cover"  />

                <div className='my-3 flex justify-between '>
                <div className=" ">
                <h1 className=' text-headingsText text-[16px] leading-[18.75px]'>Top wall Digital Clock</h1>
                <p className='text-[13px] leading-[15.23px] mt-1'>$43.00</p>
                </div>
                <RatingStar rating={5} />
            </div>
            </div>

        </div>
        </div> 

    </div>
  )
}

export default singleProductPage