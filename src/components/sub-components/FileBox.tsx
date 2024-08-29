import React from 'react'
import Image from "next/image";
import clipboard from "../../assets/clipboardtext.svg"
import dwld from "../../assets/dwld.svg"
const FileBox = () => {
  return (
    <div className='w-[275px] h-[72px] p-3 flex items-center gap-4' >
        <div className='rounded-3' > <Image src={clipboard} alt='files' width={48} height={48} />  </div>
        <div className='w-[202px] h-[39px] flex flex-col ' >
            <div className='h-[21px] font-inter text-black text-[14px] leading-[21px] '><p>ScreenShot-3817.png</p></div>
            <div className='flex gap-[10px] font-inter text-3 leading-[18px] text-black text-opacity-40 '>
                <p>PNG</p>
                <p>4mb</p>
                 </div>
        </div>
        <div> <Image src={dwld} alt='dwld' width={24} height={24} /> </div>
    </div>
  )
}

export default FileBox