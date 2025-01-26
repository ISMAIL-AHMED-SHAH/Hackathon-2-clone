'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa6';
import { TiThLargeOutline } from "react-icons/ti";
import { TiThList } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";

import Link from 'next/link';
import { Product } from '../../types/products';
import { client } from '@/sanity/lib/client';
import { allproducts } from '@/sanity/lib/quries';
import { urlFor } from '@/sanity/lib/image';
function Products() {
    // const featuredProducts = [
    //     {
    //       id: 15,
    //       name: "Vel elit euismod",
    //       discountPrice: 25.00,
    //       price: 42.00,
    //       image: "/product-15.png",
    //       height: 201,
    //       width: 201
    //     },
    //     {
    //       id: 16,
    //       name: "Ultricies condimentum imperdiet",
    //       discountPrice: 25.00,
    //       price: 42.00,
    //       image: "/product-16.png",
    //       height: 169,
    //       width: 169
    //     },
    //     {
    //       id: 17,
    //       name: "Vitae suspendisse sed",
    //       discountPrice: 25.00,
    //       price: 42.00,
    //       image: "/product-17.png",
    //       height: 201,
    //       width: 201
    //     },
    //     {
    //       id: 18,
    //       name: "Sed at fermentum",
    //       discountPrice: 25.00,
    //       price: 42.00,
    //       image: "/product-18.png",
    //       height: 188,
    //       width: 188
    //     },
    //     {
    //         id: 19,
    //         name: "Fusce pellentesque at",
    //         price: 42.0,
    //         discountPrice: 25.00,
    //         image: "/product-19.png",
    //         height: 139,
    //         width: 128 
    //       },
    //       {
    //         id: 20,
    //         name: "Vestibulum magna laoreet",
    //         price: 42.00,
    //         discountPrice: 25.00,
    //         image: "/product-20.png",
    //         height: 158,
    //         width: 154 
    //       },
    //       {
    //         id: 21,
    //         name: "Sollicitudin amet orci",
    //         price: 42.0,
    //         discountPrice: 25.00,
    //         image: "/product-21.png",
    //         height: 144,
    //         width: 114 
    //       },
    //       {
    //         id: 22,
    //         name: "Ultrices mauris sit",
    //         price: 42.00,
    //         discountPrice: 25.00,
    //         image: "/product-22.png",
    //         height: 167,
    //         width: 167 
    //       },
    //       {
    //         id: 23,
    //         name: "Pellentesque condimentum ac",
    //         price: 42.00,
    //         discountPrice: 25.00,
    //         image: "/product-23.png",
    //         height: 151,
    //         width: 170 
    //       },

    //   ];
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      async function fetchProducts() {
        const fetchProducts : Product[] = await client.fetch(allproducts);
        setProducts(fetchProducts);
        
      }
      fetchProducts();
    }, []);
    

  return (
    <div>
      <main className='bg-blue-50 w-full h-[266px] flex items-center'>
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
            <h1 className="text-headingsText text-[36px] leading-[42.19px] text-center lg:text-left">Shop Grid Default</h1>
            <p className= "font-medium text-[16px] leading-[19.2px] text-center lg:text-left text-black">Home. Phones. <span className='text-red-400'>Shop Grid Default</span></p>
        </div>
      </main>

      <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin block space-y-3 lg:flex lg:items-center lg:justify-between">
        <div className="">
          <h1 className='text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold'>Ecommerce Accessories & Fashion items </h1>
        <p className='font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className=" block md:flex items-center justify-between gap-2 mx-4 md:mx-0 ">
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E]'>Pre-Pages:</p>
            <div className="h-[23px] w-[45px] 2xl:h-[25px] 2xl:w-[55px] border-[#E7E6EF] border-[1px] border-solid"></div>
          </div>
          <div className="flex gap-7 md:gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E] '>Sort By:</p>
            <div className="h-[25px] w-[75px] 2xl:h-[28px] 2xl:w-[96px] border-[#E7E6EF] border-[1px] border-solid px-1">
              <p className="font-normal text-[9px] 2xl:text-[12px] leading-[18px] text-[#3F509E] flex items-center">Best Match
                <span><FaAngleDown /></span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E] flex items-center gap-1'>view:
              <span><TiThList /> </span>
              <span>< TiThLargeOutline /></span>
            </p>
            <div className="h-[27px] w-[110px] 2xl:h-[30px] 2xl:w-[162px] border-[#E7E6EF] border-[1px] border-solid"></div>
          </div>
        </div>
      </div>



     
      <section className="max-w-6xl mx-auto px-4 py-8">
      <div className=" lg:mx-[200px] 2xl:mx-default-margin mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {products.map((product) => (
            <div key={product._id} 
            className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
              <Link href={`/products/${product.slug.current}`}>
              {product.image && (
                <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={300}
                className='w-full h-48 object-cover rounded-md'
                />
              )}
              <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
              <p>
                {product.price ? `$${product.price}` : "Price not available"}
                {product.name}
                {""}
                {product.description}
              </p>
              </Link>
              </div>
            ))}
          </div>
              
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center ">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white transition h-[380px] w-[270px] lg:h-[361px] md:my-4 mx-auto lg:mx-0  ">
                <div className="h-[250px] w-[240px] lg:h-[236px] lg::w-[270px] bg-[#F6F7FB] flex items-center">
                  
              <Image
                src={product.image}
                alt={product.name}
                height ={178}
                width = {178}
                className={`h-[${product.height}px] w-[${product.width}px] object-cover mx-auto `}
              />
                </div>
                <div className="absolute top-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white p-2 rounded-full shadow-md">
            <FiHeart className="w-6 h-6 text-gray-700 group-hover:text-white" />
          </div>
          <div className="bg-white p-2 rounded-full shadow-md">
            <FiShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-white" />
          </div>
        </div>


              <div className="p-4 md:text-center">
               <Link href={/products/${product.id}}>
               <h3 className="text-xl font-bold text-headingsText">
                  {product.name}
                </h3>
               
               </Link>
                <p className="flex items-center gap-2 justify-center my-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                <p className="text-secondary font-bold mt-2 text-center">${product.price}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      
    </section>

    </div>
  )
}

export default Products