import React, { useState } from 'react'
import ProductCard from './ProductCard';
import SupplementDetails1 from './SupplementDetails1';
import { BsArrowRight } from "react-icons/bs";
import ProductHeader from './ProductHeader';
import GymAccessories from './GymAccessories';
import GymOutfits from './GymOutfits';
import bottom1 from '../assets/home-bottom-banner.jpg'
import bottom2 from '../assets/home-bottom-banner2.jpg'
import { Link } from 'react-router-dom';

const HomeProducts = () => {
  const productheader={
    first:"PROTEIN ZONE",
    second:"GYM ACCESSORIES",
    third:"Gym Outfits"
  }

  return (
    <div>
    <div className="mt-10 mr-4 ml-4 sm:mx-6 lg:mt-20">
        <div className="flex flex-col items-center  gap-4 mb-20 ">
            
        
            <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center"> Just Grab It</h1>
            <span className="w-20 h-[3px] ☐ bg-black"></span>
            
            <p className="max-w-[400px] text-gray-600 text-center sm:max-w-[700px]">
        
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quos fugit inventore, cumque quae corporis ratione tenetur eos voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis asperiores repudiandae assumenda quidem.
            
            </p>
        </div>
        <div className='shadow-boxxshad py-5 my-14 md:py-10'>
          <Link to="/supplements">
            <ProductHeader header={productheader.first} />
          </Link>


          <div className="max-w-screen-xl mx-auto mt-5 px-5 grid grid-cols-2  gap-3 md:px-10 lg:grid-cols-4">
            {SupplementDetails1.map(item => {
              return <ProductCard product={item} />
            })}
          </div>
        </div>

        <div className='shadow-boxxshad py-5 my-14 md:py-10'>
          <Link to="/gymaccessories">
               <ProductHeader header={productheader.second} />
          </Link>

          <div className="max-w-screen-xl py-5 mt-1 mx-auto  px-5 grid grid-cols-2  gap-3 md:px-10 lg:grid-cols-4">
            {GymAccessories.map(item => {
              return <ProductCard product={item} />
            })}
        </div>

        </div>
        
        <Link to="/gymoutfits"><img className='min-w-full min-h-96' src={bottom1} alt="banner" /> </Link> 
        <Link to="/gymoutfits"><img className=' mt-16' src={bottom2} alt="banner" /></Link>
        
        <div className='shadow-boxxshad py-5 my-14 md:py-10'>
          <Link to="/gymoutfits">
              <ProductHeader header={productheader.third} />
          </Link>

         <div className="max-w-screen-xl py-5 mt-1 mx-auto  px-5 grid grid-cols-2  gap-6 md:px-10 lg:grid-cols-4">
            {GymOutfits.map(item => {
              return <ProductCard product={item} />
            })}
          </div>

        </div>
        
        
    </div>
    
    </div>
);
};
  

export default HomeProducts