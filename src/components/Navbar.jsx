import React, { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="p-8 flex flex-row justify-between items-center">
      <img src="/logo.svg" alt="logo" />
      <div className="hidden md:flex md:flex-row gap-6 ">
      <p>Home</p>
          <p>New</p>
          <p>Popular</p>
          <p>Trending</p>
          <p>Categories</p>
      </div>
      <p className="object-cover md:hidden" onClick={()=>setShowMenu(!showMenu)}>
      <img src="/mobilebars.svg" alt="logo" className="h-28 w-20"/>
      </p>
      <div className="absolute mt-16 mr-8 z-[2] flex flex-col p-[0.5rem] min-w-[15rem] rounded-2xl bg-white" style={{display: showMenu ? 'flex': 'none'}}>
      <p>Home</p>
          <p>New</p>
          <p>Popular</p>
          <p>Trending</p>
          <p>Categories</p>
      </div>
    </nav>
  )
}

export default Navbar