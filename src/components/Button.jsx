import React from 'react'

export default function Button({text, funcionalidad}) {
  return (
    <div>
        <button onClick={() => funcionalidad()} 
        className='bg-orange-400 text-3xl text-white p-6 m-4 rounded-lg'>
        {text}</button>
    </div>
  )
}
