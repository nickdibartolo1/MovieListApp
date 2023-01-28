import React from 'react';

export default function Header(props) {
    return (
        <div>
            <div className="font-righteous text-4xl font-medium text-gray-900 dark:text-white pb-4">
                {props.children}
                <h1>Movie List</h1>
            </div>
        </div>
    )
}
