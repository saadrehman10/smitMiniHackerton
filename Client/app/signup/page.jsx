"use client"
import HelloText from '@/components/HelloText'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Home() {
    const [fullName, setFullName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const HandleRegister = async () => {
        console.log(fullName)
        console.log(lastName)
        console.log(Email)
        console.log(password)
        await axios.post('http://localhost:5000/register',{
            FirstName:fullName,
            LastName:lastName,
            Email,
            password
        }).then((res)=>{
            console.log(res.data)
            toast("Wow so easy!")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div>
            <HelloText text={'Singup'} />
            <div className="w-full h-screen bg-[#f5f5f5] flex justify-center items-center">
                <div className="login w-[400px] h-[400px] bg-white rounded-md flex flex-col justify-center items-center gap-7 px-5">
                    <input type="text" onChange={(e) => setFullName(e.target.value)} placeholder='Enter Full Name:' className='w-full py-2 border rounded px-2 outline-none' />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} placeholder='Enter Last Name:' className='w-full py-2 border rounded px-2 outline-none' />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email:' className='w-full py-2 border rounded px-2 outline-none' />
                    <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder='Enter Password:' className='w-full py-2 border rounded px-2 outline-none' />
                    <Link href="/login">Already account</Link>
                    <button onClick={HandleRegister} className='bg-purple-500 px-3 py-2 rounded-md text-white'>Signup</button>
                </div>
            </div>
        </div>
    )
}
