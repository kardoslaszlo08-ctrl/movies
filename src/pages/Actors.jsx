import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getActors } from '../utils'
import { Pagination } from '../components/Pagination'
import { Loading } from '../components/Loading'
import { ActorList } from '../components/ActorList'

export const Actors = () => {
    const [person, setPerson] = useState(null)
    const [page, setPage] = useState(1)
    useEffect(() => {
      getActors(page).then(setPerson)
    

    }, [page])
    console.log(person)
  return (
    <div>{person ? <ActorList data={person} type='person'/> : <Loading/>} 
          <Pagination {...{page,setPage}}/></div>
  )
}
