import React from 'react'
import  websiteLogo  from '../assets/websiteLogo.png';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  const productData= useSelector((state) => state.flexedge.productData);
  const userInfo=useSelector((state) => state.flexedge.userInfo)

  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 bg-white my-2 ">
      <div className="max-w-screen-xl h-full sm:px-4 flex items-center justify-between md:gap-5 md:justify-between md:mx-5">
        <div >
        
          <Link to="/">
              <img className="w-32 h-16 p-0 sm:p-0" src={websiteLogo} alt="logo" />
          </Link>

         </div>
        <div className="flex items-center gap-4 md:gap-12">
          <ul className="flex items-center gap-4 md:gap-12">
            <Link to="/"><li className='text-sm hidden md:text-base text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 lg:block'>Home</li></Link>
            <Link to="/gymaccessories"><li className='text-sm hidden md:text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 lg:block'>Equipments</li></Link>
            <Link to="supplements"><li className='text-sm hidden md:text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 lg:block'>Supplements</li></Link>
            <Link to="/contact"><li className='text-sm hidden md:text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 lg:block'>Contact</li></Link>
          </ul>
          <div className='flex items-center gap-4'>
            <div className='relative cursor-pointer'>
              <Link to="/cart">
                <HiOutlineShoppingBag className='w-8 h-8 sm:w-8' />
              </Link>
              <span className='absolute top-3 left-3 text-xs'>{productData.length}</span>
            </div>
            <Link to="/login">
              <img className='w-8 h-8 cursor-pointer rounded-2xl'  src={userInfo ? userInfo.image : './assets/userLogo.png'  } alt="userlogo" />
            </Link>
            <NavBar />
          </div>
            
        </div>
      </div>
    </div>
  )
}



export default Header
