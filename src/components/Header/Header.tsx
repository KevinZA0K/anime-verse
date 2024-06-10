import Link from 'next/link'
import React from 'react'
import {Menu} from "lucide-react"

export const Header = () => {
  return (
    <header className='flex justify-between border h-24 items-center px-12 xl:mx-12'>
    <span>Animeverse</span>
    <nav>
      <ul className='flex gap-12'>
        <Menu className='md:hidden'/>
        <li><Link href="/">Random</Link></li>
        <li><Link href="/">Lists</Link></li>
        <li><Link href="/">Perfil</Link></li>
      </ul>
    </nav>
    </header>
  )
}