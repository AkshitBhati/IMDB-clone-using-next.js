import Link from 'next/link'
import React from 'react'

const MenuItems = ({ title, address, Icon }) => {
  return (
    <div>
        <Link href={address} className='hover:text-amber-500'>
        <Icon className="text-2xl  sm:hidden"/>
      <p className='text-l hidden sm:inline uppercase '>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItems
