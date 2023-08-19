import HelloText from '@/components/HelloText'
import React from 'react'

export default function Home() {
  return (
    <div>
      <HelloText text={'Profile'}/>
      <div className="w-full h-[85vh] bg-[#f5f5f5] flex flex-col justify-center items-start py-5 px-10">
        <div className="w-[50%] h-[75vh] bg-white rounded-md flex flex-col justify-center items-start gap-3  px-10">
        <div className="w-[200px] h-[200px] border border-black"></div>
        <p>Author Name:</p>
        <input type="text" placeholder='Old Password: ' className='w-[250px] py-1 border outline-none border-gray-200 rounded-md px-1' />
        <input type="text" placeholder='Old Password: ' className='w-[250px] py-1 border outline-none border-gray-200 rounded-md px-1' />
        <input type="text" placeholder='Old Password: ' className='w-[250px] py-1 border outline-none border-gray-200 rounded-md px-1' />
        <button className='bg-purple-500 px-4 py-2 text-sm text-white rounded-md'>Update Password</button>
        </div>
      </div>
    </div>
  )
}
