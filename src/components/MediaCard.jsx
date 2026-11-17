import React from 'react'
import { img_300 } from '../utils'

export const MediaCard = ({media}) => {
  return (
<div className="card bg-gray-900 w-full shadow-sm">
  <figure>
    <img src={img_300+media.poster_path} alt={media.title || media.name}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{media.title || media.name}</h2>
    <p className='flex justify-between pt-2'>
        <span>{media.media_type}</span>
        
        <span>{media.release_date || media.first_air_date}</span>

    </p>
    
      
    </div>
  </div>

  )
}
