import React from 'react'
import Hero from '../Hero'
import Category from '../FeaturedProducts'
import LatestProducts from '../LatestProducts'
import LeatestBlog from '../LatestBlog'
import Offer from '../Offer'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <LatestProducts/>
      <Offer/>
      <LeatestBlog/>
  
    </div>
  )
}

export default Home