import React from 'react';

export default function Wrapper(props) {
  return (
    <div className='h-screen grid bg-gradient-to-r from-orange-500 to bg-red-800'>{props.children}</div>
  )
}
