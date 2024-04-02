import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { SubtitleForAllProducts } from './SubtitleForAllProducts';
import { SubtitleStores } from './SubtitleStores';

const Subtitle = () => {
  const [child1,setChilds]=useState(false)
  const [child2,setChild2] = useState(false)

  const MouseOver= () => setChilds(true)    
  const handleMouseout = () => setChilds(false)

  const MouseOver2= () => setChild2(true)    
  const handleMouseout2 = () => setChild2(false)

  return (
    <div className='relative flex text-slate-800 justify-around  font-titleFont mt-1 mb-2 pr-2 pl-2'>
        <div  className=' cursor-pointer text-base hover:bg-gray-200 p-2 rounded-xl flex gap-1 items-center'>
          <div onMouseOver={MouseOver} onMouseOut={handleMouseout}  className='cursor-pointer flex items-center gap-2'>
             <h2>All products</h2>
            <IoIosArrowDown />    
          </div>
          {
              child1 && (<div >
                            <SubtitleForAllProducts  />
                        </div>)
          }
           
        </div>

        <div  className='cursor-pointer text-base hover:bg-gray-200 p-2 rounded-xl flex gap-1 items-center'>
          <div onMouseOver={MouseOver2} onMouseOut={handleMouseout2}  className='cursor-pointer flex items-center gap-2'>
             <h2>Stores</h2>
            <IoIosArrowDown  />    
          </div>
          {
              child2 && (<div >
                            <SubtitleStores  />
                        </div>)
          }
           
        </div>
        
        <Link to='/supplements'>
          <div className='nav-link flex items-center gap-1'>Offers<IoIosArrowDown  /></div>
        </Link>
        
        <Link to="/ourstory">
          <div className='nav-link hidden sm:block'>Our Story</div>
        </Link>
        <Link to="/authencity">
            <div className='nav-link hidden sm:block'>Authencity</div>
        </Link>


    </div>
  )
}

export default Subtitle