import React from 'react'

export const SubtitleForAllProducts = () => {
  return (
    <div className='text-sm absolute top-11 left-10 right-0 z-40 bg-slate-100 flex gap-6 p-7 w-fit lg:left-36'>
        <ul className='flex flex-col gap-1 max-w-full'>
          <li className='font-black'>Protein</li>
          <li >Whey protein</li>
          <li>Muscle Tech</li>
          <li>Mass Gainer</li>
          <li>Nakpro whey gold</li>
          <li>Nakpro whey platinum</li>
        </ul>
        <ul className='flex flex-col gap-1 max-w-full'>
          <li className='font-black'>Gym Accessories</li>
          <li>Weight machine</li>
          <li>TreadMill</li>
          <li>Dumbells</li>
          <li>Calisthenics</li>
          <li>Ligth resistance rubber</li>
        </ul>
        <ul className='hidden flex flex-col gap-1 max-w-full sm:block'>
          <li className='font-black'>Gym Outfits</li>
          <li>Overneck T-shirt</li>
          <li>Unisex T-shirt</li>
          <li>Gym shoes</li>
          <li>Gym bags</li>
          
        </ul>
    </div>
   
  )
}
