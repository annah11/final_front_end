'use client'
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative bg-gray-50'>
      <section className='relative py-6 sm:py-10 lg:py-14 lg:pb-36'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8'>
            <div>
              <div className='text-center lg:text-left'>
                <h1 className='text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj'>
                  Perago Information System.
                </h1>
                <p className='mt-2 text-lg text-gray-600 sm:mt-8 font-inter'>
                Perago Systems is a technology company that focuses on developing and implementing electronic government and 
                B2B commerce solutions towards the provision of various online transactional services.
                </p>
              </div>

              <div className='flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8'>
                <div className='flex items-center'>
                  <p className='text-3xl font-medium text-gray-900 sm:text-4xl font-pj'>
                    23
                  </p>
                  <p className='ml-3 text-sm text-gray-900 font-pj'>
                    Total
                    <br />
                    Positions
                  </p>
                </div>

                <div className='flex items-center'>
                  <p className='text-3xl font-medium text-gray-900 sm:text-4xl font-pj'>
                    100+
                  </p>
                  <p className='ml-3 text-sm text-gray-900 font-pj'>
                    Total
                    <br />
                    Employees
                  </p>
                </div>
              </div>
            </div>

            <div className='w-[90%] h-[90%]'>
              <img className='w-full object-cover' src='./logo.jpg' alt='' />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
