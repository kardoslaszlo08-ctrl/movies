import React from 'react'
import { useState } from 'react'
import { Filter } from '../components/Filter'
import { SearchBar } from '../components/SearchBar'
import { getMedia } from '../utils'
import { MediaList } from '../components/MediaList'
import { Pagination } from '../components/Pagination'
import { useEffect } from 'react'

export const SearchMedia = () => {
  const [page, setPage] = useState(1)  
  const [type, setType] = useState('movie')
  const [searchText, setSearchText] = useState('')
  const [media, setMedia] = useState(null)
  const [maxPage, setMaxPage] = useState(1)
  console.log(type,searchText);
  const handleSearch=()=>{
if(searchText.trim().length==0) return
  console.log('ok')
    getMedia(type,searchText,page).then(setMedia)
  }
  useEffect(() => {
    if(!media) return
    setMaxPage(Math.ceil(media.length/20))

  }, [media])

  useEffect(() => {
      getMedia(type,searchText,page).then(setMedia)
  }, [page])
  
  
  return (
    <div className='min-h-screen'>
      <Filter type={type} setType={setType}/>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
      {media && <MediaList data={media} type={type}/>}
      <Pagination {...{page,setPage,maxPage}}/>
    </div>
  )
}
