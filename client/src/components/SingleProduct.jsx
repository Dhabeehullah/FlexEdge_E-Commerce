import React, { useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/flexedgeSlice';
import { ToastContainer,toast } from 'react-toastify';

const SingleProduct = () => {

  const dispatch=useDispatch();
  const [baseQty,setbaseQty] =useState(1)
  const Location=useLocation();
  const [details,setDetails]=useState({})

  useEffect(() => {
    setDetails(Location.state.item)
  },[]);

  return (
    <div>
      <div className=" max-w-screen-xl mx-10 my-10 flex justify-center gap-10">
        <div className="w-2/5 relative flex justify-center items-center">
          <img
          className="w-40 h-40 object-center  sm:w-full sm:h-full"
          src={details.image}
          alt="productImg"
          />
          <div className="absolute top-4 right-0">
          {details.isNew && (
            <p className="text-sm bg-black
            text-white font-semibold font-titleFont px-4 py-1 sm:px-8 sm:text-base">
            Sale
            </p>
          )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-5 sm:gap-12">
            <div>
              <h2 className="text-sm font-semibold">{details.title}</h2>
              <div className="flex items-center gap-4 mt-3">
                <p className="text-sm line-through font-base text-gray-500">
                ${details.oldPrice}
                </p>
                <p className="text-sm font-medium Itext-gray-900">
                ${details.price}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-base">
              <div className="flex">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <p className="text-xs text-gray-500">(1 Customer review)</p>
            </div>
            
            <div className='flex gap-2 sm:gap-4'>
              <div className="w-fit h-10 flex items-center justify-between text-gray-500 gap-4 border p-3 sm:h-20">
                <p className=" hidden text-xs sm:block sm:text-sm">Quantity</p>
                <div className="flex items-center gap-2 text-sm font-semibold sm:gap-4">
                  <button onClick={() => baseQty > 1 && setbaseQty(baseQty-1)} className="border h-5 font-normal text-sm flex items-center
                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                  duration-300 active:bg-black sm:text-lg">
                  -
                  </button>
                  <span>
                  {baseQty}
                  </span>
                  <button onClick={() => setbaseQty(baseQty+1)} className="border h-5 font-normal text-sm flex items-center
                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                  duration-300 ☐ active:bg-black sm:text-lg">
                  +
                  </button>
                </div>
              </div> 
              <button 
               onClick={() => dispatch(addToCart({
                id:details.id,
                title:details.title,
                image:details.image,
                price:details.price,
                quantity:baseQty,
              })
              )&toast.success(`${details.title.toLowerCase()} is added`)
              }
               className="bg-black text-white py-2 px-1 active:bg-gray-800 text-xs sm:text-sm sm:px-5">
                add to cart
              </button>
            </div>
              <p className=" text-gray-500 text-xs sm:text-base">
              Category:{" "}
              <span className="font-medium capitalize text-xs sm:text-base">{details.category}</span>
              </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default SingleProduct