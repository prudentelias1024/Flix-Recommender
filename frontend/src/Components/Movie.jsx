import React from 'react'

export default function Movie({title,img}) {
  return (
    <div className='flex flex-col w-[20em] h-[20em] lg:w-[20em] lg:h-[20em] mb-[2em]'>
        { img !== " " ?
          <img src={"https://image.tmdb.org/t/p/w500/"+img} className='h-[80%] w-[100%] ml-[0em] lg:ml-[0em] lg:w-[100%] object-contain'/>: " "
        }
      <p className='ml-[5em] mt-[1em] lg:ml-[4.5em] mb-[2em] w-[70%] lg:text-base text-sm z-0 font-bold text-white'>{title}</p>

    </div>
  )
}
