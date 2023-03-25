

import data from '../../component/data/data'
import Header from '../header'
const page = () => {
  
    
    return (<>
      <Header />
    <div className='ml-72 gap-14 flex flex-row'>{data.map((item,i)=>{
        return <>
            <div key={i} className=' right-0 w-[196px]  flex-row-reverse h-[254]px rotate-[20px] p-[5px] '>
                <img src={item.image} className=' ' alt="" />
            </div>
        
        </>
    })}</div>
    </>
  )
}

export default page