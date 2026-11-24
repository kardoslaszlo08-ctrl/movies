import React from 'react';
//import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300 } from '../utils';
import AliceCarouselImport from 'react-alice-carousel';

const AliceCarousel=AliceCarouselImport.default ?? AliceCarouselImport




export const Carousel = ({ credits }) =>{
    const items=credits.map(obj=>
        <div key={obj.id}>
            <img className='w-full h-40 object-contain'
            src={obj.profile_path ? img_300+obj.profile_path:"placeholder.webp"} alt={obj.name} />
            <p className='text-center text-sm'>{obj.name}</p>
        </div>
    )

    return (

    <AliceCarousel mouseTracking items={items}
        responsive={
            {
                0:{items: 2},
                600:{items:4},
                1024:{items:6}
            }
        } 
        controlsStrategy="alternate"
        />
    )
}