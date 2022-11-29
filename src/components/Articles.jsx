import React from 'react';
import currency from '../assets/images/currency.jpg';
import restaurant from '../assets/images/restaurant.jpg';
import plane from '../assets/images/plane.jpg';
import confetti from '../assets/images/confetti.jpg';

const Articles = () => {
  return (
    <section className='py-10 w-4/5 mx-auto'>
      <h1 className=' text-2xl mb-10'>Latest Articles</h1>

      <div className='flex flex-col space-x-5 text-GrayishBlue md:flex-row'>
        <div className='mb-10 bg-White md:mb-0'>
          <div className=' w-full overflow-hidden'>
            <img className='article' src={currency} alt='img' />
          </div>
          <div className='p-5'>
            <span>By Claira Robinson</span>
            <h1 className=' text-xl text-DarkBlue my-5'>
              Receive money in any currency with no fees
            </h1>
            <h3>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single ...
            </h3>
          </div>
        </div>
        <div className='mb-10 bg-White md:mb-0'>
          <div className=' w-full overflow-hidden'>
            <img className='article' src={restaurant} alt='img' />
          </div>
          <div className=' p-5'>
            <span>By Wilson Hutton</span>
            <h1 className=' text-xl text-DarkBlue my-5'>
              Treat yoursel without worrying about money
            </h1>

            <h3>
              Our simple budgeting feature alloes you to separate out your
              spending and set realistic limits each month. That means you ...
            </h3>
          </div>
        </div>
        <div className='mb-10 bg-White md:mb-0'>
          <div className=' w-full overflow-hidden'>
            <img className='article' src={plane} alt='img' />
          </div>
          <div className=' p-5'>
            <span>By Wilson Hutton</span>
            <h1 className=' text-xl text-DarkBlue my-5'>
              Take your Easybank card wherever you go
            </h1>
            <h3>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purcheses while you're abroad. We'll even show you ...
            </h3>
          </div>
        </div>
        <div className='mb-10 bg-White md:mb-0'>
          <div className=' w-full overflow-hidden'>
            <img className='article' src={confetti} alt='img' />
          </div>
          <div className=' p-5'>
            <span>By Claira Robinson</span>
            <h1 className=' text-xl text-DarkBlue my-5'>
              Our invite-only Beta accounts are now live!
            </h1>
            <h3>
              Ater a lot of hard work by the whole team, we're excited to lunch
              our closed beta. It's easy to request an invite through the site
              ...
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
