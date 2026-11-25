import React from 'react'
import { ActorCard } from './ActorCard'

export const ActorList = ({ data, type }) => {
    return (
        <div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center pt-4'>
                {data && data.map(obj => <ActorCard key={obj.id} media={obj} type={type} />)}
            </div>
        </div>
    )
}