import React from 'react';
import './Wrapper.css'

export default function Wrapper(props) {
  return (
    <div className='background'>{props.children}</div>
  )
}
