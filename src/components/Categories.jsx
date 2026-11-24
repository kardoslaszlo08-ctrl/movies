import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getCategories } from '../utils'

export const Categories = ({ type, selectedCategories, setSelectedCategories }) => {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getCategories(type).then(setCategories)


    }, [])
    categories && console.log('kategoriák:', categories);
    const handleChange=(id)=>{
        setSelectedCategories(prev=>prev.includes(id) ? prev.filter(item=>item!=id) :[...prev,id])
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {categories && categories.map(obj =>
                <fieldset key={obj.id} className="fieldset bg-base-100 border-base-300 rounded-box w-8 border text-gray-700 p-1">
                    <label className="label">
                        <input type="checkbox"  className="checkbox"
                        onChange={()=>handleChange(obj.id)} />
                        {obj.name}
                    </label>
                </fieldset>
            )}
        </div>
    )
}
