import React from 'react'
import { getSelectedMediaByCateg, getTvs } from '../utils';
import { useEffect } from 'react';
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { useState } from 'react';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/pagination';

export const TvShows = () => {
  const [tvshows, setTvshows] = useState(null)
  const [page, setPage] = useState(1)
  
  const [selectedCategories, setSelectedCategories] = useState([])
  

  tvshows && console.log(tvshows);
  useEffect(() => {
  getSelectedMediaByCateg('tv', selectedCategories.join(','),page).then(setTvshows)
    }, [selectedCategories.join(','),page])
  


  return (
    <div>
      <Categories type='tv'{...{selectedCategories,setSelectedCategories}}/>
      {tvshows ? <MediaList data={tvshows} type='tv'/> : <Loading/>}
      <Pagination {...{page,setPage}}/>
       
</div>
  )
}

