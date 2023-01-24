import React from 'react';
import Card from './Card';
import './Header.css'

export default function Header(props) {
    return (
        <div>
            <div className="text-xl font-medium text-gray-900 dark:text-white">
                {props.children}
                <h1>Movie List</h1>
            </div>
        </div>
    )
}
