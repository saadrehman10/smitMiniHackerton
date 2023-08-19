"use client"
import HelloText from '@/components/HelloText'
import useLocalStorage from '@/hooks';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Home() {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken, removeToken] = useLocalStorage('authToken', null);
    const router = useRouter();


    async function HandleLogin() {
        console.log(Email)
        console.log(password)
        const apiUrl = 'http://localhost:5000'; // Replace with your API URL

        try {
            const response = await fetch(`${apiUrl}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ Email, password }),
            });
        
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message);
            }
        
            const data = await response.json();
            console.log(data)
            setToken(data)
            toast("Wow so easy!")
            router.push('/');
          } catch (error) {
            throw new Error('Login failed: ' + error.message);
          }
    }

    return (
        <div>
            <HelloText text={'Login'} />
            <div className="w-full h-screen bg-[#f5f5f5] flex justify-center items-center">
                <div className="login w-[400px] h-[300px] bg-white rounded-md flex flex-col justify-center items-center gap-10 px-5">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email:' className='w-full py-2 border rounded px-2 outline-none' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password:' className='w-full py-2 border rounded px-2 outline-none' />
                    <Link href="/signup">create account</Link>
                    <button onClick={HandleLogin} className='bg-purple-500 px-3 py-2 rounded-md text-white'>Login</button>
                </div>
            </div>
        </div>
    )
}
