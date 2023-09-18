import React from 'react'

export const Navbar = () => {
  return (
    <nav className="shadow-md w-full h-20 bg-accentColor relative top-0 left-0">
      <div className="md:flex h-20 py-4 md:px-10 px-7 text-white items-center justify-between">
        <div className="  font-bold cursor-pointer flex items-center">
          <span className='text-2xl'>rentells</span>
        </div>
      </div>
    </nav>
  )
}
