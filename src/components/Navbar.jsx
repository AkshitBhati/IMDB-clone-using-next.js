import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='bg-amber-100 text-lg dark:bg-amber-600 p-3 flex gap-3 justify-center align-middle'>
      <NavbarItem title={"Trending"} param="fetchTrending"/>
      <NavbarItem title={"Top Rated"} param="fetchTopRated"/>
    </div>
  )
}

export default Navbar
