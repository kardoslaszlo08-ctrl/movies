import React from 'react'
import { img_300 } from '../utils'

export const PersonCredits = ({ credits }) => {
    if (!credits || !credits.length) return null

    const sorted = [...credits].sort((a, b) =>
        (b.release_date || '').localeCompare(a.release_date || '')
    )

    return (
        <div className="w-full pt-6">
            <h4 className="font-bold text-lg pb-3 text-center">Filmek</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-96 overflow-y-auto pr-2">
                {sorted.map(item => (
                    <div key={item.credit_id} className="flex flex-col items-center text-center">
                        <img
                            className="rounded-lg w-full"
                            src={item.poster_path ? img_300 + item.poster_path : 'placeholder.webp'}
                            alt={item.title}
                        />
                        <p className="font-bold text-sm pt-2">{item.title}</p>
                        <p className="text-xs text-gray-300">
                            {item.release_date ? item.release_date.slice(0, 4) : 'ismeretlen év'}
                        </p>
                        {item.character && (
                            <p className="text-xs text-gray-400 italic">{item.character}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}