


import Link from 'next/link'
// import React, { useState } from 'react'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlinePlaySquare, AiOutlineHeart, AiOutlineUser, AiOutlinePlusSquare } from 'react-icons/ai'
import { IoReorderThreeOutline } from 'react-icons/io5'
import Toggle from '../component/toggle/page'

const header = ({ theme ,setTheme}) => {
  // const theme = false;
  return (
    <div className={`  ${theme == true ? "bg-black text-white  border-white" : "bg-white text-black border-black"} h-[100%]  fixed overflow-hidden border-r-[0.1px]    left-0  flex flex-col gap-3 w-[15rem] pt-9 pl-6 pb-16`}>
      <Link href={'/'} className='text-2xl font-bold'>Instagram</Link>
      <span className={`pt-5 text-xl capitalize flex gap-2 `}><AiOutlineHome className='text-2xl' /> <Link href={'/'} >home</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><AiOutlineSearch className='text-2xl' /> <Link href={'/search'} >search</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><AiOutlineCompass className='text-2xl' /> <Link href={'/explore'} >explore</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><AiOutlinePlaySquare className='text-2xl' /> <Link href={'/reels'} >reels</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><RiMessengerLine className='text-2xl' /> <Link href={'/messages'} >messages</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><AiOutlineHeart className='text-2xl' /> <Link href={'/notifications'} >notifications</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><AiOutlinePlusSquare className='text-2xl' /> <Link href={'/create'} >create</Link></span>
      <span className=' pt-5 text-xl capitalize flex gap-2'><AiOutlineUser className='text-2xl' /> <Link href={'/profile'} >profile</Link></span>
    <Toggle theme={theme} setTheme={setTheme} />
      
    </div>
  )
}

export default header