import React from 'react';
import './List.css';
import UserPick from '../UserPick/UserPick';

export default function List(props) {
    const space = ' - '

    return (
        <div>
            <div className='list'>
                <ul>
                    {props.picks.map(pick => (
                        <UserPick
                            key={pick.id}
                            id={pick.id}
                            onDelete={props.onDeletePick}
                        >
                            {pick.movie}
                            {space}
                            {pick.urgency}
                        </UserPick>
                    ))}
                </ul>
            </div>
        </div>
    )
}
