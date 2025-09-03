import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='relative'>
        <div className='absolute top-0 left-0 w-[40%] h-[60%] bg-purple-800 rounded-[50%] z-[-1] blur-[100px] opacity-70'></div>
        <div className='absolute top-0 right-0 w-[60%] h-[50%] bg-red-600 rounded-[50%] z-[-1] blur-[100px] opacity-70'></div>
    {/*Hero Main*/}
        <div className='max-w-[1200px] mx-auto flex flex-col gap-[21px] items-center justify-center text-center h-[80vh] px-5'>
            <span className='text-yellow-600 text-[1.2rem] backdrop-blur-xl bg-white bg-opacity-40 px-3 py-2 rounded-xl shadow-xl'>TagLine Of Psge ⭐</span>
            <div className='flex flex-col gap-[2px]'>
                <h1 className='text-[3rem] font-bold text-blue-700'>Main Title Of The Page Docker</h1>
                <h2 className='text-[1.9rem] font-bold text-blue-500 stroke-current border-b-2 border-yellow-600'>Sub Title Of The Page Lorem ipsum dolor sit.</h2>
            </div>
            <p className='text-[1rem] text-yellow-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eius corrupti laboriosam tenetur voluptatibus minima.</p>
            <div className='flex flex-row gap-[3rem]'>
            <button className='px-3 py-2 bg-blue-700 rounded-xl font-bold text-white hover:bg-blue-400'>Signup</button>
            <button className='px-3 py-2 bg-transparent rounded-xl font-bold text-blue-700 border-2 border-yellow-800 hover:bg-blue-400'>Login</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero