import React from 'react'
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  return (
  <>
  <div className='relative'>      
    <nav className="bg-white drop-shadow-md shadow-gray-500 fixed top-0 left-0 right-0">
      <div className="container mx-auto px-5">
        <div className="relative flex py-3 items-center justify-between">
          <div className="absolute first-letter:flex items-center sm:hidden">
          <Hamburger size={28} onToggle={toggled => {
            if (toggled) {
              var element = document.getElementById("mobile-nav");
              element.classList.remove("hidden");
            } else {
              var element = document.getElementById("mobile-nav");
              element.classList.add("hidden");
            }
          }} />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="font-bold text-2xl p-1">Portfolio.</h1>
            </div>
            <div className="hidden sm:block" >
              <div className="flex mx-auto justify-center items-center">
                <a href="/#hero" className="hover:text-gray-500 px-3 py-2 text-base font-medium">Home</a>
                <a href="#" className="hover:text-gray-500 px-3 py-2 text-base font-medium">About</a>
                <a href="#" className="hover:text-gray-500 px-3 py-2 text-base font-medium">Projects</a>
                <a href="#" className="hover:text-gray-500 px-3 py-2 text-base font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:hidden" id="mobile-nav">
        <div className="absolute z-10 w-full bg-white mx-auto text-center">
          <a href="#" className="hover:text-gray-500 px-3 py-3 block text-base font-medium">Home</a>
          <a href="#" className="hover:text-gray-500 px-3 py-3 block text-base font-medium">About</a>
          <a href="#" className="hover:text-gray-500 px-3 py-3 block text-base font-medium">Projects</a>
          <a href="#" className="hover:text-gray-500 px-3 py-3 block text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
    </div>
  </>
  );
}

export default Navbar