import BlogCard from '@/common/BlogCard'
import React from 'react'

export default function HelloText({text}) {
  return (
    <div className='w-full h-[60px]  bg-white flex justify-start px-10 items-center gap-5'>
      <p className='text-lg font-black'>{text}</p>
    </div>
  )
}
