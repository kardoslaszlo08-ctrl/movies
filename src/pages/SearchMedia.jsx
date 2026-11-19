import React from 'react'
import { useState } from 'react'
import { Filter } from '../components/Filter'
import { SearchBar } from '../components/SearchBar'
import { getMedia } from '../utils'
import { MediaList } from '../components/MediaList'

export const SearchMedia = () => {
  const [type, setType] = useState('movie')
  const [searchText, setSearchText] = useState('')
  const [media, setMedia] = useState(null)
  console.log(type,searchText);
  const handleSearch=()=>{
if(searchText.trim().length==0) return
  console.log('ok')
    getMedia(type,searchText).then(setMedia)
  }
  return (
    <div className='min-h-screen'>
      <Filter type={type} setType={setType}/>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
      {media && <MediaList data={media} type={type}/>}
    </div>
  )
}
