import React from 'react'

const page = ({theme,setTheme}) => {
  return (
<span className='text-xl mt-12 cursor-pointer capitalize' onClick={()=>setTheme(!theme)}>{theme?'light mode' : 'dark mode'}</span>  )
}

export default page