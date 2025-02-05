'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa6';
import { TiThLargeOutline } from "react-icons/ti";
import { TiThList } from "react-icons/ti";
import Link from 'next/link';
import { Product } from '../../types/products';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { addToCart } from '../actions/actions';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';
import { groq } from 'next-sanity';

function Products() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      async function fetchProducts() {
        const fetchProducts : Product[] = await client.fetch(groq`*[_type == "product"]{
          _id,
          name,
          price,
          discountPrice,
          stockLevel,
          "image": image.asset->url,
          stock,
          category,
          description,
          slug,
          rating {
            rate,
            count
          }
        }`);
 
        setProducts(fetchProducts);
        
      }
      fetchProducts();
    }, []);

    const handleAddToCart = (e: React.MouseEvent, product : Product) => {
      e.preventDefault()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${product.name} added to cart`,
        showConfirmButton: false,
        timer: 1500
      })

      addToCart(product)
    }
    

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



     
      <section className="max-w-6xl mx-auto px-4 py-6">
  <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-200 bg-white flex flex-col" // Make the card a flex container
        >
          <Link href={`/products/${product.slug.current}`}>
            <div className="overflow-hidden rounded-t-lg">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
            </div>
            <div className="p-4 flex flex-col flex-grow"> 
              <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-500">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {product.discountPrice ? (
                  <>
                    <span className="text-red-500 font-bold">
                      ${product.discountPrice}
                    </span>
                    <span className="line-through text-gray-400 ml-2">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  `$${product.price}`
                )}
              </p>
              <div className="flex items-center mt-3">
                <span className="text-yellow-500 flex">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3.75l2.14 4.33 4.79.7-3.47 3.38.82 4.77L12 14.88l-4.28 2.25.82-4.77-3.47-3.38 4.79-.7L12 3.75z"
                        />
                      </svg>
                    ))}
                </span>
                <span className="text-sm text-gray-600 ml-2">(4.5)</span>
              </div>
            </div>
          </Link>
          {/* Add to Cart Button */}
          <div className="p-4 mt-auto">
            <Button
              className="w-full bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-100 transition-transform duration-200 ease-in-out"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  )
}

export default Products