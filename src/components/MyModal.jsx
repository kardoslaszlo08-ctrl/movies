import React, { useState, useEffect } from 'react'
import { getCredits, getTrailer, img_500 } from '../utils'
import { IoLogoYoutube } from 'react-icons/io5'
import { Carousel } from './Carousel'

export const MyModal = ({ isOpen, setIsOpen, media, type }) => {
    const [trailer, setTrailer] = useState(null)
    const mediaType = media.media_type || type
const [credits, setCredits] = useState(null)


    useEffect(() => {
      getCredits(media.media_type || type, media.id).then(setCredits)
    }, [])
    
    
    useEffect(() => {
        if (!isOpen || !mediaType) return
        getTrailer(mediaType, media.id).then(setTrailer)
        
    }, [isOpen, mediaType, media.id])

    const getYoutubeTrailer = () => {
        if (!trailer || !trailer.length) return null
        return trailer.find(obj => obj.site === 'YouTube') || null
    }

    const youtubeTrailer = getYoutubeTrailer()

    return (
        <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box bg-gray-700 text-white flex flex-col items-center max-w-200 w-fit">
                {media.backdrop_path && (
                    <img src={img_500 + media.backdrop_path} alt={media.title || media.name} />
                )}
                <h3 className="font-bold text-lg">
                    <span>{media.original_title || media.original_name}</span>
                    <span> ({media.first_air_date || media.release_date})</span>
                </h3>
                <p className="py-4">{media.overview}</p>
                {youtubeTrailer && (
                    <a href={`https://www.youtube.com/watch?v=${youtubeTrailer.key}`} target="_blank" rel="noreferrer">
                        <IoLogoYoutube size={32} />
                    </a>
                )}
                {credits && <Carousel credits={credits.slice(0,8)}/>}
                <div className="modal-action">
                    <button className="btn" onClick={() => setIsOpen(false)}>close</button>
                </div>
            </div>
        </dialog>
    )
}