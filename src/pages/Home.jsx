import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTrendings, img_300 } from '../utils'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'

export const Home = () => {
  const [trendings, setTrendings] = useState(null)
  
  trendings && console.log(trendings);
  useEffect(() => {
    getTrendings().then(setTrendings) 
  }, [])
  


  return (
    <div>
      {trendings ? <MediaList data={trendings} type='trending'/> : <Loading/>} 
</div>
  )
}

