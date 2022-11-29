import React from 'react';
import onboard from '../assets/images/icon-onboarding.svg';
import online from '../assets/images/icon-online.svg';
import budgeting from '../assets/images/icon-budgeting.svg';
import api from '../assets/images/icon-api.svg';

const Section = () => {
  return (
    <section className=' w-full py-10 bg-LightGrayishBlue'>
      <div className='w-4/5 mx-auto text-center md:text-start'>
        <h1 className=' text-2xl mb-1'>Why choose Easybank?</h1>
        <h3 className='text-GrayishBlue mb-10 w-full md:w-1/2'>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </h3>

        <div className='flex flex-col space-x-5 text-GrayishBlue md:flex-row'>
          <div className=' mb-10 md:mb-0'>
            <img className='article mx-auto md:mx-0' src={online} alt='img' />
            <h1 className=' text-2xl text-DarkBlue my-5'>Online Banking</h1>
            <h3>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </h3>
          </div>
          <div className='mb-10 md:mb-0'>
            <img
              className='article mx-auto md:mx-0'
              src={budgeting}
              alt='img'
            />
            <h1 className=' text-2xl text-DarkBlue my-5'>Simple Budgeting</h1>

            <h3>
              See exactly where your money goes each month. Recieve notiications
              when your're close to hitting your limits.
            </h3>
          </div>
          <div className='mb-10 md:mb-0'>
            <img className='article mx-auto md:mx-0' src={onboard} alt='img' />
            <h1 className=' text-2xl text-DarkBlue my-5'>Fast Onboarding</h1>
            <h3>
              We don't do branches. Open your account in minutes online and
              start taking control o your fanances right away.
            </h3>
          </div>
          <div className='mb-10 md:mb-0'>
            <img className='article mx-auto md:mx-0' src={api} alt='img' />
            <h1 className=' text-2xl text-DarkBlue my-5'>Open API</h1>
            <h3>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
