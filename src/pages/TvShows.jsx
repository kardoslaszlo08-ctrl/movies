import React from 'react'
import { getMediaByCateg } from '../utils';
import { useEffect } from 'react';
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { useState } from 'react';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';

export const TvShows = () => {
  const [tvshows, setTvshows] = useState(null)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const [selectedCategories, setSelectedCategories] = useState([])

  const changeCategories = (value) => {
    setSelectedCategories(value)
    setPage(1)
  }

  useEffect(() => {
    getMediaByCateg('tv', selectedCategories.join(','), page).then(data => {
      setTvshows(data.results)
      setMaxPage(Math.min(data.total_pages || 1, 10))
    })
  }, [selectedCategories.join(','), page])

  return (
    <div>
      <Categories type='tv' selectedCategories={selectedCategories} setSelectedCategories={changeCategories} />
      {tvshows ? <MediaList data={tvshows} type='tv' /> : <Loading />}
      <Pagination {...{ page, setPage, maxPage }} />
    </div>
  )
}