import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import MovieApi from '../Components/MovieApi/MovieApi';

export default function DropButton() {

    const [openDrop, setOpenDrop] = useState(false)

    const Link = [
        {
            "MovieLink": 'https://www.imdb.com/chart/top/'
        }
    ]

    const showDropToggleHandler = (event) => {
        setOpenDrop(prev => !prev)
        console.log(openDrop)
    }

    return (
        <div className='flex justify-end'>
            <button onClick={showDropToggleHandler} id="dropdownButton" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-red-800 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                {/* <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg> */}
                {!openDrop ? (
                    <AiOutlineCaretDown className=''/>
                ) : (
                    <AiOutlineCaretUp className='' />
                )}
            </button>

            {openDrop && (
                <div id="dropdown" className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2" aria-labelledby="dropdownButton">
                        <MovieApi></MovieApi>
                        {/* {Link.map((item, i) => (
                            <div>
                                <h3>{item.MovieLink}</h3>
                            </div>
                        ))} */}
                    </ul>
                </div>
            )}
        </div>
    )
}
