import React from 'react'
import data from './data'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <header className='max-w-4xl mx-auto px-6 py-10 text-center'>
        <motion.img src='/photo.jpg' alt={data.name} className='w-32 h-32 rounded-full mx-auto shadow-lg mb-4' initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} />
        <h1 className='text-3xl font-semibold'>{data.name}</h1>
        <p className='text-sm text-gray-600'>{data.title}</p>
        <p className='text-sm text-gray-600'>{data.location}</p>
        <div className='mt-3'>
          <a href={`mailto:${data.email}`} className='px-3 py-1 border rounded text-sm hover:bg-gray-100'>Email</a>
        </div>
      </header>
    </div>
  )
}