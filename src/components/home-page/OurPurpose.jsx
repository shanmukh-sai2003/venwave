import React from 'react';
import ourPurposeImage from '../../assets/ourPurpose.png';
import readyToElevate from '../../assets/readyToElevate.png';
import logoImage from '../../assets/primary-logo.svg';

function OurPurpose() {
  return (
    <>
      <section className="flex justify-center items-center p-6 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full my-8 gap-10">
          <div className="flex flex-col justify-center">
            <p className="leading-[70px] text-[2.5rem] font-bold">
              Building a bridge between <span className='text-[#53B053]'>consultancy firms</span> and <span className='text-[#53B053]'>SME's</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={ourPurposeImage} alt="Company Purpose" className="rounded-2xl max-w-full h-auto" />
          </div>
        </div>
      </section>
      <section className='flex justify-center my-10 flex-col items-center'>
        <h1 className='text-4xl font-bold mt-4 mb-10'>Ready to Elevate Your <span className='text-[#53B053]'>Business</span>?</h1>
        <div className='relative'>
          <img src={readyToElevate} alt="ready to elevate your bussiness" className='h-[90vh] w-[100vw]'/>
          <div className='absolute bottom-0 w-[50%] right-[200px] px-8 pt-8 bg-black bg-opacity-65'>
            <p className='leading-[55px] text-white font-semibold text-3xl px-8 pt-5 pb-5 border-x-4 border-t-4'>Bridge the gap between your business goals and expert guidance. Sign up now and let Venwave be your partner in growth!</p>
          </div>
        </div>
      </section>
      <section className='flex ml-[200px] justify-between gap-32 mt-32 mb-20'>
        <div className='w-[35%]'>
          <h1 className='font-bold text-4xl'>Why <span className='text-[#53B053]'>VENWAVE</span>?</h1>
          <img src={logoImage} alt="venwave logo" className='my-[70px] float-right'/>
        </div>
        <div>
          <div className='h-fit pl-24 py-8 rounded-tl-full rounded-bl-full shadow-[0px_0px_10px_5px_#53B053] mb-10'>
            <h3  className='font-semibold text-2xl mb-2 w-fit'>Tailored Solutions:</h3>
            <p className='text-lg text-[#212529] w-[75%]'>Find consultancy firms that understand the unique challenges and opportunities of your industry.</p>
          </div>
          <div className='h-fit pl-24 py-5 rounded-tl-full rounded-bl-full shadow-[0px_0px_10px_5px_#53B053] my-10'>
            <h3  className='font-semibold text-2xl mb-2 w-fit'>Budget-Friendly:</h3>
            <p className='text-lg text-[#212529] w-[75%]'>Connect with consultancy services that fit your financial parameters, enabling you to invest in growth without financial strain.</p>
          </div>
          <div className='h-fit pl-24 py-8 rounded-tl-full rounded-bl-full shadow-[0px_0px_10px_5px_#53B053] my-10'>
            <h3  className='font-semibold text-2xl mb-2 w-fit'>Verified Experts:</h3>
            <p className='text-lg text-[#212529] w-[75%]'>Gain access to a curated network of consultancy firms with proven expertise and a track record of success.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPurpose;
