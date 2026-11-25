import React from 'react'
import { useState } from 'react'
import { Filter } from '../components/Filter'
import { SearchBar } from '../components/SearchBar'
import { getMedia } from '../utils'
import { MediaList } from '../components/MediaList'
import { ActorList } from '../components/ActorList'
import { Pagination } from '../components/Pagination'
import { useEffect } from 'react'

export const SearchMedia = () => {
  const [page, setPage] = useState(1)
  const [type, setType] = useState('movie')
  const [searchText, setSearchText] = useState('')
  const [media, setMedia] = useState(null)
  const [maxPage, setMaxPage] = useState(1)

  const fetchMedia = (p) => {
    if (searchText.trim().length == 0) return
    getMedia(type, searchText, p).then(data => {
      setMedia(data.results)
      setMaxPage(Math.min(data.total_pages || 1, 500))
    })
  }

  const handleSearch = () => {
    if (page !== 1) setPage(1)   // az oldalváltás effectje fogja lekérni
    else fetchMedia(1)
  }

  useEffect(() => {
    fetchMedia(page)
  }, [page])

  useEffect(() => {
    setMedia(null)
    setPage(1)
    setMaxPage(1)
  }, [type])

  return (
    <div className='min-h-screen'>
      <Filter type={type} setType={setType} />
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      {media && (type === 'person'
        ? <ActorList data={media} type={type} />
        : <MediaList data={media} type={type} />
      )}
      <Pagination {...{ page, setPage, maxPage }} />
    </div>
  )
}