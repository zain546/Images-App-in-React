import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <>
     <nav className='flex items-center justify-between p-5 w-full text-black text-lg font-semibold'>
        <div className="text-2xl items-center hidden  lg:block">Logo</div>
        <div className="text-2xl lg:hidden block">Random-Images</div>
        <div className=" hidden lg:flex gap-5 text-black">
            <Link href="/">Home</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Courses">Courses</Link>
            <Link href="/Contact">Contact</Link>
        </div>
     </nav>
    </>
  )
}

export default Header