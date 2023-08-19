"use client"

import BlogCard from '@/common/BlogCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MyBlogs({ title }) {

    const [getBlog , setGetBlog] = useState([]);

    const fetchBlogs = async () => {
        await axios.get('http://localhost:5000/blogs').then((res) => {
            console.log(res.data)
            setGetBlog(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div className='w-full py-2  lg:px-[50px] md:px-[50px] sm:px-2 bg-[#f5f5f5]'>
            <p className="text-2xl font-medium pl-8">{title}</p>
            <div className="w-full py-2 lg:px-8 md:px-6 sm:px-10 flex flex-col gap-5">
                {
                    getBlog.map((item)=>{
                        return(
                            <BlogCard id={item.id} title={item.title} description={item.description} width={'50%'} />
                        )
                    })
                }
                

            </div>
        </div>
    )
}
