import React from 'react'
import ProductCard from '../components/ProductCard'
import { FaArrowRight } from "react-icons/fa";
import SupplementDetails1 from '../components/SupplementDetails1';
import SupplementDetails2 from '../components/SupplementDetails2';



const SupplementsForAllProducts = () => {
    
  return (
    <div>
         <div className=' py-10 my-0'>
            <h1 className='font-bold text-xl flex items-center gap-5 ml-5 sm:ml-10 sm:text-2xl md:text-3xl'>PROTEIN <FaArrowRight className='text-3xl' /> </h1>
            <div className="max-w-screen-xl mx-auto mt-5 shadow-boxxshad p-10 grid grid-cols-2  gap-3 md:grid-cols-4">
            
                {SupplementDetails2.map(item => {
                return <ProductCard product={item} />
                })}
            </div>
            <div className="max-w-screen-xl mx-auto mt-5 shadow-boxxshad p-10 grid grid-cols-2  gap-3 md:grid-cols-4">
                {SupplementDetails1.map(item => {
                return <ProductCard product={item} />
                })}
            </div>
          </div>
    </div>
  )
}

export default SupplementsForAllProducts