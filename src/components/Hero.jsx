import React from 'react';
import mockups from '../assets/images/mockups.png';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <section className='flex flex-col-reverse justify-between align-middle w-4/5 mx-auto md:flex-row'>
      <div className='mt-16 w-full text-center md:mt-40 md:text-left md:w-2/5'>
        <h1 className=' text-5xl mb-2'>Next generation</h1>
        <h1 className=' text-5xl mb-5'>digital banking</h1>

        <h3 className='mb-5 text-GrayishBlue'>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </h3>

        <Button>Request Invite</Button>
      </div>
      <div className=' mt-0 mr-0 md:-mt-10 md:-mr-40'>
        <img src={mockups} alt='img' width={500} />
      </div>
    </section>
  );
};

export default Hero;
