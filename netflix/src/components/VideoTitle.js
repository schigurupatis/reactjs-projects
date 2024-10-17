import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 wrapper w-[1024px] mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>{title}</h1>
      <p className='text-lg font-bold py-4 w-1/2'>{overview}</p>
      <div className='mt-4'>
        <button className='text-black px-10 py-3 bg-gray-300 mr-4 font-bold rounded-sm'>Play</button>
        <button className='text-white px-10 py-3 bg-gray-400 mr-1 font-bold rounded-sm'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle