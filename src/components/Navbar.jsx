import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/hamburger.svg';
import close from '../assets/images/close.svg';
import Button from '../UI/Button';

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <>
      <nav className='fixed flex justify-around bg-White p-2 w-full'>
        <img className=' p-4' src={logo} alt='Logo' />
        <div className=' hidden text-GrayishBlue justify-between space-x-5 p-4 md:flex'>
          <a href='#' className=' hover:text-LimeGreen '>
            Home
          </a>
          <a href='#' className='  hover:text-LimeGreen'>
            About
          </a>
          <a href='#' className='  hover:text-LimeGreen'>
            Contact
          </a>
          <a href='#' className='  hover:text-LimeGreen'>
            Blog
          </a>
          <a href='#' className='  hover:text-LimeGreen'>
            Careers
          </a>
        </div>
        <div className='hidden md:block'>
          <Button>Request Invite</Button>
        </div>
        {!showToggle && (
          <button
            onClick={() => setShowToggle(true)}
            className='block md:hidden'
          >
            <img
              className='p-3 hover:bg-LightGrayishBlue'
              src={hamburger}
              alt='toggle'
            />
          </button>
        )}
        {showToggle && (
          <button
            onClick={() => setShowToggle(false)}
            className='block md:hidden'
          >
            <img
              className='p-3 hover:bg-LightGrayishBlue'
              src={close}
              alt='toggle'
            />
          </button>
        )}
      </nav>

      {showToggle && (
        <>
          <div
            onClick={() => setShowToggle(false)}
            className='fixed h-full w-full bg-black opacity-70 top-16 mt-1 md:hidden'
          />
          <nav className='trans fixed flex flex-col bg-White top-24 text-GrayishBlue space-y-10 w-4/5 ml-10 text-center text-2xl p-10 rounded-lg md:hidden'>
            <a href='#' className=' hover:text-LimeGreen '>
              Home
            </a>
            <a href='#' className='  hover:text-LimeGreen'>
              About
            </a>
            <a href='#' className='  hover:text-LimeGreen'>
              Contact
            </a>
            <a href='#' className='  hover:text-LimeGreen'>
              Blog
            </a>
            <a href='#' className='  hover:text-LimeGreen'>
              Careers
            </a>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
