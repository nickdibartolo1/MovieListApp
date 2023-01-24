import React from 'react';

export default function UserPick(props) {

    const deleteHandler = () => {
        props.onDelete(props.id)
    };

  return (
    <li className="" onClick={deleteHandler}>
      {props.children}
    </li>
  )
}
