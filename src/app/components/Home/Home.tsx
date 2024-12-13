import React from 'react'
import Hero from '../Hero'
import Category from '../FeaturedProducts'
import LatestProducts from '../LatestProducts'
import LeatestBlog from '../LatestBlog'
import Offer from '../Offer'
import Unique from '../Unique'
import DiscountItem from '../Discount'
import TopCategory from '../TopCategory'
import TrendingProducts from '../Trending'
import Update from '../Update'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <LatestProducts/>
      <Offer/>
      <Unique/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategory/>
      <Update/>
      <LeatestBlog/>
  
    </div>
  )
}

export default Home