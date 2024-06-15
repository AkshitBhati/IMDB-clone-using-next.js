"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NavbarItem = ({ title, param }) => {
    const searchParam = useSearchParams()
    const genre = searchParam.get('genre')


  return (
    <div>
    <Link href={`/?genre=${param}`} className={`hover:text-amber-500 font-semibold ${genre === param ? "underline underline-offset-8 decoration-4" : ""}`}>
    <p>{title}</p>
    </Link>
      
    </div>
  )
}

export default NavbarItem
