import React from 'react'
import Movie from './Movie'

export default function Movies({moviesWithPoster}) {
  return (
    <div className='grid lg:grid-cols-3 lg:grid-flow-row grid-cols-1 grid-flow-row gap-x-[1.5em] ' id='m_box'>
      {moviesWithPoster.map((movie,index) => {
        return <Movie key={index} title={movie.title} img={movie.poster_path}/>
      })}
    </div>
  )
}
