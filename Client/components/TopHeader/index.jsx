"use client"

import React,{useEffect,useState} from 'react'

export default function TopHeader() {
    const [userName,setUserName] = useState()
    const data = () => {
        const user = JSON.parse(localStorage.getItem('authToken'));
        console.log(user.FirstName)
        setUserName(user.FirstName)
    }

    useEffect(() => {
        data()
    }, [])

  return (
    <div className='w-full h-[40px] bg-blue-600 flex justify-between items-center px-3'>
      <p className="text-white">Personal Blogging App</p>
      <div className="flex gap-3">
        <p className='text-white'>{userName ? userName :""}</p>
        <p><p className='text-white'>{userName ? 'Logout' :""}</p></p>
      </div>
      
    </div>
  )
}
