import React from 'react'
import { getTvs } from '../utils';
import { useEffect } from 'react';
import { MediaList } from '../components/MediaList';
import { Loading } from '../components/Loading';
import { useState } from 'react';

export const TvShows = () => {
  const [tvshows, setTvshows] = useState(null)
  
  tvshows && console.log(tvshows);
  useEffect(() => {
    getTvs().then(setTvshows) 
  }, [])
  


  return (
    <div>
      {tvshows ? <MediaList data={tvshows} type='tv shows'/> : <Loading/>} 
</div>
  )
}

