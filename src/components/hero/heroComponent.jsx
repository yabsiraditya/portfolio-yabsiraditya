import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='mt-[80px] container mx-auto p-5'>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 bg-gray-400">
            <div className="flex justify-center items-center">
              <h1 className='p-12'>Haloo</h1>
            </div>
          </div>
          <div class="hidden lg:block md:w-1/2  bg-gray-500">
            <div className="flex justify-center items-center">
              <h1 className='p-12'>Gambar</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero