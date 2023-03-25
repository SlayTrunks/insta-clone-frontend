'use client';
import React from 'react'
import { useState } from 'react'
import {AiOutlineHeart,AiOutlineMessage,AiOutlineSend,AiFillHeart} from 'react-icons/ai'
import data from '@/component/data/data'

const page = ({theme}) => {
  const [like,setLike] = useState(false)
  return (
    <main className={` z-0 ml-[15rem] pt-7 h-auto ${theme?" bg-slate-700  text-white":"bg-gray-200  text-black"} h-[100vh] w-full absolute flex`}>
    <div  >
      <div className= {`${theme?" bg-black   text-white":"bg-white text-black"} ml-32 sm:h-24  h-24 w-[40vw] rounded-2xl flex  place-items-center`}>
        {data.map((item,index)=>{
          return(
            <div key={index}><img src={item.image} alt="" className='h-[60px] w-[60px] cursor-pointer rounded-[50%] border-red-600 border-[3px] ml-5' />
        <span className='ml-7 cursor-pointer'>{item.name.slice(0,5 )}</span></div>
          )
        })}
      </div>
      {data.map((item,index)=>{
        return(
          <div className="container">
        <div className={`${theme?" bg-black  text-white":"bg-white text-black"} ml-32   h-[100vh] w-[40vw] rounded-2xl mt-11 overflow-hidden `}>
          

          <span className='mt-[10px] ml-[50px]'>{item.name}</span>
          <img src={item.image}className='h-[80%] w-[80%] mt-[15px] ml-[50px] ' alt="" />
          <div className='flex ml-[50px] mt-4 text-3xl gap-6 cursor-pointer'>
          <AiFillHeart onClick={()=>setLike(!like)} className={`${like &&'text-red-400'}`}/>
          
          <AiOutlineMessage />
          <AiOutlineSend/>
          </div>
          <p className='ml-[50px] overflow-hidden'>{item.caption.slice(0,100)}...</p>
        </div>
      </div>
        )
      })}
      
      </div>
      <h1  className='text-white ml-[100px] mt-5 '>Profile</h1>
    </main>
  )
}

export default page