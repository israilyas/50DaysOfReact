import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

function LanguageSelector() {

    const { setLanguage } = useContext(LanguageContext)

    return (
        <div className='flex flex-row gap-2 justify-center items-center'>
            <label htmlFor="text-md font-reguler">Select Laguage</label>
            <select
            className='border-blue-400 border-1 px-3 py-3 outline-none'
            onChange={(e) => setLanguage(e.target.value)}>
                <option value="en" className='px-2'>English</option>
                <option value="ur" className='px-2'>Urdu</option>
                <option value="fr" className='px-2 py-3'>French</option>
            </select>
        </div>
    )
}

export default LanguageSelector
