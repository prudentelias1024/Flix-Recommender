import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
export default function Input({moviesSetter, textSetter}) {
  const inputRef = useRef()
  const [URL, setURL] = useState()
  useEffect(() => {
     if (process.env.NODE_ENV == 'production') {
       setURL("flix-recommender-api.onrender.com/")
      }else{
       setURL("localhost:8000/")
     }
  })
  const recommend = async(event) => {

    event.preventDefault()
     const movies = await (await axios.post(`${URL}api/recommend/`,{query: inputRef.current.value })).data  
     let sorted_movies = []
     let no_poster = []
     let new_movies = JSON.parse(movies)
     
     new_movies.forEach((movie) => {
       if(movie.poster_path !== ' '){
        sorted_movies.push(movie)
       } else{
         no_poster.push(movie)
       }
     })

    

     moviesSetter(sorted_movies)
     textSetter(no_poster)
    
       }
  return (
    <form onSubmit={recommend} className='flex flex-col ml-[3em] lg:ml-[20em] mb-[10em] mt-[6em] gap-[1em]'>

      <input  ref={inputRef} type="text" name="movie_title" className=' placeholder:pl-[1em] placeholder:ml-[1em] bg-white border-white h-[3em] w-[80%] lg:w-[60%] ' placeholder='Enter Movie title' />
      <button  className=' text-white font-[Poppins] bg-red-500 h-[3em] w-[10em]'>Recommend</button>
    </form>
  )
}
