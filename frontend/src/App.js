import Input from './Components/Input';
import './App.css';
import { useState } from 'react';
import Movies from './Components/Movies';

function App() {
  const [recommendedMoviesWithPoster , setRecommendedMoviesWithPoster] = useState([])
  const [recommendedMoviesWithoutPoster , setRecommendedMoviesWithoutPoster] = useState([])
  return (
    <div className="flex flex-col ">

      <p className='text-red-500 font-black text-xl mx-[1em] py-[1em] font-[Poppins]'>FlixRecommender</p>
      <Input moviesSetter={setRecommendedMoviesWithPoster} textSetter={setRecommendedMoviesWithoutPoster}/>
      {
        recommendedMoviesWithPoster.length  !== 0 ?  <Movies moviesWithPoster={recommendedMoviesWithPoster}/>: ''
      }
      
      {/* <div>
        
            {
         recommendedMoviesWithoutPoster.length  !== 0 ?
         <p className='ml-[4.5em] mb-[2em] z-0 font-extrabold text-white'>Other Movies</p>
     :""
      }
        
      <div className='flex flex-col'>
      {
        recommendedMoviesWithoutPoster.length  !== 0 ?  
        
        recommendedMoviesWithoutPoster.map((movie) => {
          return <p className='ml-[4.5em] mb-[2em] z-0 font-bold text-white'>{movie.title}</p>
          
          
        })
        : ''
      }
     
      </div>
      </div> */}
      
    </div>
    
  );
}

export default App;
