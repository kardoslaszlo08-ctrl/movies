import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTrendings, img_300 } from '../utils'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'
import { Pagination } from '../components/Pagination'

export const Home = () => {
  const [trendings, setTrendings] = useState(null)
  const [page, setPage] = useState(1)
  trendings && console.log(trendings);
  useEffect(() => {
    getTrendings(page).then(setTrendings) 
  }, [page])
  


  return (
    <div>
      {trendings ? <MediaList data={trendings} type='trending'/> : <Loading/>} 
      <Pagination {...{page,setPage}}/>
</div>
  )
}

