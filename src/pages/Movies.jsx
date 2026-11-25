import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { getMediaByCateg } from '../utils';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';

export const Movies = () => {
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [selectedCategories, setSelectedCategories] = useState([])

  const changeCategories = (value) => {
    setSelectedCategories(value)
    setPage(1)
  }

  useEffect(() => {
    getMediaByCateg('movie', selectedCategories.join(','), page).then(data => {
      setMovies(data.results)
      setMaxPage(Math.min(data.total_pages || 1, 10))
    })
  }, [selectedCategories.join(','), page])

  return (
    <div>
      <Categories type='movie' selectedCategories={selectedCategories} setSelectedCategories={changeCategories} />
      {movies ? <MediaList data={movies} type='movie' /> : <Loading />}
      <Pagination {...{ page, setPage, maxPage }} />
    </div>
  )
} 