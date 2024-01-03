import React from 'react'
import { BsCart } from "react-icons/bs";


const Navbar = ({data}) => {
  return (
  <section className='flex w-full h-full justify-between p-6'>
    <h1 className='font-bold text-2xl text-yellow-800'>Amazon</h1>
    <aside>
    <h4 className='relative'><BsCart  className='text-xl'/> 
    <p className='w-5 h-5 text-sm rounded-[100%] bg-blue-800 text-white font-bold absolute -top-3 flex items-center justify-center ml-2'>
        {data.filter(item=>item.added).length}  
      </p> </h4>
    </aside>
    
  </section>
  )
}

export default Navbar