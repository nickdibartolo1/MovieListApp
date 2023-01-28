import React from 'react';

export default function Card(props) {
  return (
    <div className='flex justify-center m-16'>
    <div className='w-full max-w-sm p-4 bg-red-600 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"'>{props.children}</div>
    </div>
  )
}
