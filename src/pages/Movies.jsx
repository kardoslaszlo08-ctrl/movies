import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { getMovies } from '../utils';

export const Movies = () => {
  const [movies, setMovies] = useState(null)
  
    movies && console.log(movies);
    useEffect(() => {
      getMovies().then(setMovies) 
    }, [])
    

  return (
    <div>
      {movies ? <MediaList data={movies} type='movie'/>:<Loading/>}
    </div>

  )
}

