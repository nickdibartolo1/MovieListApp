import React from 'react';


export default function Button(props) {
    return (
        <button className='font-righteous w-full text-white bg-stone-800 hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={props.onClick}>{props.children}</button>
    )
}
