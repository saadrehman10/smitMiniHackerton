"use client"

import BlogPublish from '@/components/BlogPublish'
import MyBlogs from '@/components/MyBlogs'
import Title from '@/components/Title'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {useEffect} from "react"

export default function Home() {

  const router = useRouter();
  
  const userFetch = () => {
    const dta = JSON.parse(localStorage.getItem('authToken'))
    if(!dta) {
      return router.push('/login')
    }
  }

  useEffect(() => {
    userFetch()
  }, [])

  return (
   <main>
    <Title />
    <BlogPublish />
    <MyBlogs title={'My Blogs'} />
   </main>
  )
}
