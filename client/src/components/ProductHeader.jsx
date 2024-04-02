import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const ProductHeader = (props) => {
  return (
  <div className='flex justify-between mx-6 my-2 mb-1 mt-5 sm:mx-10'>
    <p className='font-bold cursor-pointer text-sm sm:text-base'>{props.header}</p>
    <span className='text-xs flex items-center gap-2 cursor-pointer hover:scale-110 duration-300 sm:text-sm'>VIEW PRODUCTS<BsArrowRight /></span>
  </div>
  )
}

export default ProductHeader