import React, { useState, useEffect } from 'react'
import { getCredits, getTrailer, getPerson, getPersonCredits, img_500 } from '../utils'
import { IoLogoYoutube } from 'react-icons/io5'
import { Carousel } from './Carousel'
import { PersonCredits } from './PersonCredits'

export const MyModal = ({ isOpen, setIsOpen, media, type }) => {
    const [trailer, setTrailer] = useState(null)
    const [credits, setCredits] = useState(null)
    const [person, setPerson] = useState(null)
    const [personCredits, setPersonCredits] = useState(null)
    const mediaType = media.media_type || type
    const isPerson = mediaType === 'person'

    useEffect(() => {
        if (!mediaType) return
        if (isPerson) {
            getPerson(media.id).then(setPerson)
            getPersonCredits(media.id).then(setPersonCredits)
        } else {
            getCredits(mediaType, media.id).then(setCredits)
        }
    }, [])

    useEffect(() => {
        if (!isOpen || !mediaType || isPerson) return
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
                {isPerson ? (
                    <>
                        <div className="flex flex-col items-center w-full max-w-md">
                            {(person?.profile_path || media.profile_path) && (
                                <img
                                    className="rounded-lg w-40 shadow-lg"
                                    src={img_500 + (person?.profile_path || media.profile_path)}
                                    alt={person?.name || media.name}
                                />
                            )}
                            <h3 className="font-bold text-2xl pt-4 text-center">{person?.name || media.name}</h3>
                            {person && (
                                <>
                                    <div className="w-full pt-3 text-sm text-gray-300 space-y-1">
                                        <p><span className="font-bold text-white">Born:</span> {person.birthday || 'unknown'}</p>
                                        <p><span className="font-bold text-white">Birthplace:</span> {person.place_of_birth || 'unknown'}</p>
                                    </div>
                                    <p className="w-full pt-4 text-base leading-relaxed text-gray-100 max-h-60 overflow-y-auto pr-2">
                                        {person.biography || 'No biography available.'}
                                    </p>
                                </>
                            )}
                        </div>
                        <PersonCredits credits={personCredits} />
                    </>
                ) : (
                    <>
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
                    </>
                )}
                <div className="modal-action">
                    <button className="btn" onClick={() => setIsOpen(false)}>close</button>
                </div>
            </div>
        </dialog>
    )
}