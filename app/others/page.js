import React from 'react'

const page = ({theme}) => {
  return (
    <div className={`${theme?" bg-slate-700 text-white":"bg-white text-black"} ml-[60rem] h-[full] flex flex-row   `}>
      <h1>profle</h1>
    </div>
  )
}

export default page