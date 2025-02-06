'use client'

import { Product } from '@/types/products'
import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Cart = () => {
  const [catItem, setCatItems] = useState<Product[]>([])

  useEffect(() => {
    setCatItems(getCartItems())
  }, [])

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id)
        setCatItems(getCartItems())
        Swal.fire("Removed", "Your item has been removed", "success")
      }
    })
  }

  // const handleQuantity = (id: string, quantity: number) => {
  //   updateCartQuantity(id, quantity)
  //   setCatItems(getCartItems())
  // }

  const handleIncrement = (id: string) => {
    const product = catItem.find((item) => item._id === id)
    if (product) {
      updateCartQuantity(id, product.stockLevel + 1)
      setCatItems(getCartItems())
    }
  }

  const handleDecrement = (id: string) => {
    const product = catItem.find((item) => item._id === id)
    if (product && product.stockLevel > 1) {
      updateCartQuantity(id, product.stockLevel - 1)
      setCatItems(getCartItems())
    }
  }

  const calculateTotal = () => {
    return catItem.reduce((total, item) => total + item.price * item.stockLevel, 0)
  }

  const router = useRouter()

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: `Total: $${calculateTotal()}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Proceeded", "Your order has been placed", "success")
        router.push('/checkout')
        setCatItems([])
      }
    })
  }

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

        {catItem.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Image
              src="/empty-shopping-cart.jpg"
              alt="Empty Cart"
              width={300}
              height={300}
              className="mb-6"
            />
            <p className="text-2xl font-semibold text-gray-800">Your Cart is Empty</p>
            <p className="text-gray-500 mt-2">Looks like you haven&apos;t added anything to your cart yet.</p>
            <Link href="/" className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-md">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-bold text-gray-700">Product</th>
                    <th className="text-left p-4 font-bold text-gray-700">Price</th>
                    <th className="text-left p-4 font-bold text-gray-700">Quantity</th>
                    <th className="text-left p-4 font-bold text-gray-700">Total</th>
                    <th className="text-left p-4 font-bold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {catItem.map((product) => (
                    <tr key={product._id} className="border-t">
                      <td className="p-4 flex items-center">
                        {product.image && (
                          <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={183}
                            height={187}
                            className="w-18 h-18 object-cover rounded-md mr-4"
                          />
                        )}
                        <div>
                          <p className="text-gray-800 font-medium">{product.name}</p>
                        </div>
                      </td>
                      <td className="p-4">${product.price}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <button onClick={() => handleDecrement(product._id)} className="border px-2">-</button>
                          <span className="mx-2">{product.stockLevel}</span>
                          <button onClick={() => handleIncrement(product._id)} className="border px-2">+</button>
                        </div>
                      </td>
                      <td className="p-4">${(product.price * product.stockLevel).toFixed(2)}</td>
                      <td className="p-4">
                        <button onClick={() => handleRemove(product._id)} className="text-red-600">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-md" onClick={handleProceed}>
                Proceed To Checkout
              </button>
              <p className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart


