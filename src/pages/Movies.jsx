import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { getSelectedMediaByCateg } from '../utils';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/pagination';

export const Movies = () => {
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)

  const [selectedCategories, setSelectedCategories] = useState([])

    movies && console.log(movies);
    console.log(selectedCategories)
    useEffect(() => {
      getSelectedMediaByCateg('movie', selectedCategories.join(','),page).then(setMovies)
    }, [selectedCategories.join(','),page])
    

  return (
    <div>
      <Categories type='movie' {...{selectedCategories,setSelectedCategories}}/>
      {movies ? <MediaList data={movies} type='movie'/>:<Loading/>}
      <Pagination {...{page,setPage}} />
    </div>

  )
}

