"use client"
import axios from 'axios';
import React from 'react'

export default function BlogPublish() {
    const [title,setTitle] = React.useState('');
    const [discription,setDiscription] = React.useState('');



    const HandlePost = async () =>{
        const Authid = localStorage.getItem('authToken')
        const user = JSON.parse(Authid)
        console.log(user)

        await axios.post('http://localhost:5000/blogs',{
            userId:user.id,
            title,
            description:discription,
            
        }).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }



  return (
    <div className='w-full h-[400px] bg-[#f5f5f5]  flex justify-start items-center px-10'>
      <div className="lg:w-[50%] md:w-[50%] sm:w-[95%] h-[80%] bg-white rounded-md flex flex-col justify-center items-start gap-5 px-5">
            <input onClick={(e)=>setTitle(e.target.value)} type='text' className='w-full py-2 outline-none border px-2 rounded-md ' placeholder='placeholder'/>
            <textarea onClick={(e)=>setDiscription(e.target.value)} className='w-full h-[50%] border px-2 rounded-md outline-none py-1' placeholder='what is your mind'></textarea>
            <button onClick={HandlePost} className='px-5 py-2 bg-purple-700 rounded-md text-white'>Post</button>
      </div>
    </div>
  )
}
