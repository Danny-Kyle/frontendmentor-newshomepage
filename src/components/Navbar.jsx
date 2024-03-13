import React, { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="p-8 flex flex-row justify-between items-center">
      <img src="/logo.svg" alt="logo"/>
      <div className="hidden md:flex md:flex-row gap-6 ">
      <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>New</p>
          <p className='cursor-pointer'>Popular</p>
          <p className='cursor-pointer'>Trending</p>
          <p className='cursor-pointer'>Categories</p>
      </div>
      <p className="object-cover md:hidden" onClick={()=>setShowMenu(!showMenu)}>
      <div>
        {showMenu === false ? <img src="/mobilebars.svg" alt="logo" className="h-28 w-20"/> : <img src="/mobileX.svg" alt="logo" className="h-28 w-20"/>}
      </div>
      </p>
      <div className="absolute mt-6 mr-8 z-2 bottom-72 right-0 flex flex-col p-[0.5rem] min-w-[15rem] rounded-2xl bg-white gap-5" style={{display: showMenu ? 'flex': 'none'}}>
      <p className='hover:text-yellow-400 active:text-red-400'>Home</p>
          <p className='hover:text-yellow-400 active:text-red-400'>New</p>
          <p className='hover:text-yellow-400 active:text-red-400'>Popular</p>
          <p className='hover:text-yellow-400 active:text-red-400'>Trending</p>
          <p className='hover:text-yellow-400 active:text-red-400'>Categories</p>
      </div>
    </nav>
  )
}

export default Navbar