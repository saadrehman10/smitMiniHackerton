import BlogCard from '@/common/BlogCard'
import HelloText from '@/components/HelloText'
import React from 'react'

export default function Home() {
  return (
    <div className=''>
      <HelloText text={'Back to Blogs'}/>
      <div className="w-full h-[84vh] bg-[#f5f5f5] overflow-y-auto">
        <div className="w-full py-2 px-10 flex justify-start items-center">
          <h4 className='font-medium'>All from Elon Musk</h4>
        </div>
        <div className="con w-full py-2 flex justify-between items-start pl-10 pr-3">
          <div className="blogs flex flex-col gap-2">
          <BlogCard width={'60%'}/>
          <BlogCard width={'60%'}/>
          <BlogCard width={'60%'}/>
          <BlogCard width={'60%'}/>
          <BlogCard width={'60%'}/>
          {/* <BlogCard width={'100%'}/> */}
          </div>
          <div className="w-[600px] h-[400px] px-2  flex flex-col justify-start items-start py-2 gap-2">
          <p>elon@gmail.com</p>
          <p >Elon Musk</p>
          <div className="image w-[200px] h-[200px] border-2 border-black rounded-md ">

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
