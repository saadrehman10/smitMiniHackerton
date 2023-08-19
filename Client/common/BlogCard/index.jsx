"use client"
import React, { useState,useEffect } from 'react'
import TruncateText from '../TruncateText'
import axios from 'axios'
import { Button, Modal } from 'antd';
import Link from 'next/link';

export default function BlogCard({ width, title, description, id }) {

    const [updateTitle, setUpdateTitle] = useState(title);
    const [updateDescription, setUpdateDescription] = useState(description);
    const [userName,setUserName] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const HandleDelete = async () => {
        await axios.delete(`http://localhost:5000/blogs/${id}`).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const data = () => {
        const user = JSON.parse(localStorage.getItem('authToken'));
        console.log(user.FirstName)
        setUserName(user.FirstName)
    }

    useEffect(()=>{
        data()
    },[])


    const HandleUpdate = async () =>{
        const updatedData = {
            title:updateTitle,
            description:updateDescription
        }
        
        await axios.put(`http://localhost:5000/update-blog/${id}`,updatedData).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })

    }

    return (
        <>
            <div className={`lg:w-[${width}] md:w-[50%] h-auto py-2 sm:w-[90%] lg:mx-0 md:mx-0 sm:mx-2   bg-white  rounded-md mb-2`} style={{ paddingTop: 20, paddingBottom: 10, }}>
                <div className="w-full  flex justify-start items-center" style={{ height: 120, paddingLeft: 10 }}>
                    <div className="   mx-3 flex justify-start items-center gap-3 px-2 h-auto py-1" style={{ width: '70%', gap: 10 }}>
                        <div className="border border-black" style={{ width: 90, height: 80 }}></div>
                        <div className=" flex flex-col justify-center px-2" style={{ width: 270, height: 80 }}>
                            <p className='text-md font-black'>{title}</p>
                            <div className="flex justify-start items-center gap-2">
                                <Link href="/profile">{userName?userName:''}</Link>
                                <p>12-01-2022</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-ful flex flex-col px-2 py-2" style={{ height: 'auto' }}>
                    <TruncateText text={description} maxWords={100} />
                </div>
                <div className="flex justify-start gap-2 items-center px-2 py-2 ">
                    <p onClick={HandleDelete} className='text-purple-500 cursor-pointer'>Delete</p>
                    <p onClick={showModal} className='text-purple-500 cursor-pointer'>Edit</p>
                </div>
            </div>


            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="px-2 py-2">
                    <input type="text" value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)} className='w-full py-2 border border-gray-300 mb-2'/>
                    <input type="text"  value={updateDescription} onChange={(e)=>setUpdateDescription(e.target.value)} className='w-full py-2 border border-gray-300'/>
                    <Button onClick={HandleUpdate} className="px-5 py-2 bg-purple-600 rounded-md text-white">Update</Button>
                </div>
            </Modal>
        </>
    )
}
