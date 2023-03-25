'use client';
import { Inter } from 'next/font/google'
import Header from './header'
import { useState } from 'react'
import Main from './main/page'
import Others from './others/page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [theme,setTheme ]= useState(false)
  return (
    <div >
    <Header theme={theme} setTheme={setTheme} /> 
    <Main theme={theme}/>
    {/* <Others theme={theme}/>  */}
    </div>
  )
}
