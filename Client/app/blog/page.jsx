import HelloText from '@/components/HelloText'
import MyBlogs from '@/components/MyBlogs'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HelloText text={'Good Morning Readers'}/>
      <MyBlogs title={'All Blogs'}/>
    </div>
  )
}
