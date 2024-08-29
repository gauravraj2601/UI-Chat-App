import React from 'react'
import Image from "next/image";
import avatar from "../../assets/Frame 10.png";
const DirectoryInsideBox = () => {
  return (
    <div className="w-[300px] h-[72px] flex justify-center items-center p-3  bg-background ">
    <div className="w-[293px] h-[48px] flex gap-4 ">
      <div>
        {" "}
        <Image
          className="rounded-2xl"
          src={avatar}
          alt="avatar"
          height={48}
          width={48}
          />{" "}
      </div>
      <div className="w-[229px] h-[69px] flex flex-col gap-2 ">
        <div className="h-[39px] flex flex-col  ">
          <div className="h-[21px] flex gap-3 text-[14px] font-inter ">
            <div className="w-[186px]  ">Florencio Dorrance </div>
          </div>
          <div className="w-[229px] h-[18px] font-inter text-[12px] text-[#718096] ">
            <p>wooooo</p>
          </div>
        </div>
      </div>
    </div>
 </div>
  )
}

export default DirectoryInsideBox