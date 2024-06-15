import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import MenuItems from './MenuItems'

const Header = () => {
  return (
    <div className='flex justify-between max-w-6xl mx-auto p-4'>
     <div className="flex gap-4">
        <MenuItems title="home" address={"/"} Icon={FaHome}/>
        <MenuItems title="about" address={"/about"} Icon={IoMdInformationCircle}/>
     </div>
     <div className="flex gap-3 items-center">
        <span className='bg-amber-500 px-2 py-1 rounded-lg' >IMDB</span>
        <span className='hidden sm:inline'>Clone</span>
     </div>
    </div>
  )
}

export default Header
