import React from 'react'
import { img_300 } from '../utils'
import { useState } from 'react'
import { MyModal } from './MyModal'

export const ActorCard = ({ media, type }) => {
      const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div>
            <div className="card bg-gray-900 w-full shadow-sm">
                <figure onClick={()=>setIsOpen(true)}>
                    <img
                        src={media.profile_path ? img_300 + media.profile_path : 'placeholder.webp'} alt={media.name || media.known_for_department} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{media.title || media.name}</h2>
                  <div className='flex flex-wrap justify-between gap-x-3 gap-y-1 pt-2'>
    {(media.known_for || []).map((obj) => <span key={obj.id}>{obj.title ? obj.title : obj.name}</span>)}
</div>
                </div>
            </div>
        </div>
        {isOpen && <MyModal {...{isOpen,setIsOpen,media ,type}}/>}
        </>
    )
}
