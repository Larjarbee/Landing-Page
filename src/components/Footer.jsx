import React from 'react';
import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/facebook.svg';
import pinterest from '../assets/images/pinterest.svg';
import instagram from '../assets/images/instagram.svg';
import youtube from '../assets/images/youtube.svg';
import twitter from '../assets/images/twitter.svg';
import Button from '../UI/Button';

const Footer = () => {
  return (
    <footer className=' w-full bg-DarkBlue text-VeryLightGray'>
      <div className='flex flex-col justify-between w-4/5 py-16 mx-auto text-center md:text-start md:flex-row'>
        <div>
          <img className='bg-White p-2 mx-auto' src={logo} alt='Logo' />
          <div className='flex justify-center space-x-3 pt-10'>
            <a className='rounded-full p-2 hover:bg-GrayishBlue' href='#'>
              <img src={facebook} alt='icon' />
            </a>
            <a className='rounded-full p-2 hover:bg-GrayishBlue' href='#'>
              <img src={youtube} alt='icon' />
            </a>
            <a className=' rounded-full p-2 hover:bg-GrayishBlue' href='#'>
              <img src={twitter} alt='icon' />
            </a>
            <a className='rounded-full p-2 hover:bg-GrayishBlue' href='#'>
              <img src={pinterest} alt='icon' />
            </a>
            <a className='rounded-full p-2 hover:bg-GrayishBlue' href='#'>
              <img src={instagram} alt='icon' />
            </a>
          </div>
        </div>
        <div className='flex justify-center flex-col py-10 md:py-0 md:space-x-16 md:flex-row'>
          <div className='flex flex-col space-y-3 mb-4'>
            <a className=' hover:text-GrayishBlue' href='#'>
              About Us
            </a>
            <a className=' hover:text-GrayishBlue' href='#'>
              Contact
            </a>
            <a className=' hover:text-GrayishBlue' href='#'>
              Blog
            </a>
          </div>
          <div className='flex flex-col space-y-3'>
            <a className=' hover:text-GrayishBlue' href='#'>
              Careers
            </a>
            <a className=' hover:text-GrayishBlue' href='#'>
              Support
            </a>
            <a className=' hover:text-GrayishBlue' href='#'>
              Privacy Policy
            </a>
          </div>
        </div>
        <div>
          <Button>Request Invite</Button>
          <br />
          <span className=' text-GrayishBlue'>
            &copy;Easybank. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
