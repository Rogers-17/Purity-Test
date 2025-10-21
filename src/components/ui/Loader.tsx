import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-lime-600'>
        <div className='w-12 h-12 border-4 border-lime-300 border-t-lime-600 rounded-full animate-spin'></div>
        <p className='mt-4 text-gray-600 font-medium'>Loading questions...</p>
    </div>
  );
}

export default Loader
