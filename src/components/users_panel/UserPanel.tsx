import React from "react";
import Image from "next/image";
import arr from "../../assets/downArr.svg";
import Searchuser from "./Searchuser";
const UserPanel = () => {
  return (
    <div className="w-[349px] bg-background border-r-2  border-gray-200 ">
      <div className="h-[88px] p-6 flex items-center justify-between bg-background">
        <div className="flex justify-center items-center gap-[6px]  ">
          {" "}
          <div className="text-[20px] font-inter text-black leading-[30px]">
            Users
          </div>{" "}
          <div>
            <Image src={arr} alt="arr-icon" height={16} width={16} />
          </div>{" "}
          <div className="w-[30px] h-[22px] px-2 py-1 rounded-[24px] ont-inter font-semibold text-xs leading-6 bg-gray-200 text-center flex items-center">
            12
          </div>{" "}
        </div>
        {/* <div>
        <Image src={plus} alt="plus" height={40} width={40} />
      </div> */}
      </div>
      <hr className="border-t-2" />

      <div className="h-[72px] py-3 px-6 ">
        <Searchuser />
      </div>
      
    </div>
  );
};

export default UserPanel;
