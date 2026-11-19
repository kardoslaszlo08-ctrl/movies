import React from 'react'
import { MediaCard } from './MediaCard'
import { getTitle } from '../utils'

export const MediaList = ({data,type}) => {
          
    return (
      <div>
        <h2 className='text-center font-bold text-gray-300 p-2 text-2xl'>{getTitle(type)}</h2>
    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center pt-4'>
        {data&&data.map(obj=><MediaCard key={obj.id} media={obj} type={type}/>)}
    </div>
    </div>
  )
}
