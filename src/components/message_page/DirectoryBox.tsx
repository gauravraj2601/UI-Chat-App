import React from "react";
import Image from "next/image";
import avatar from "../../assets/Frame 10.png";
import dots from "../../assets/threedot.svg";
import DirectoryInsideBox from "../sub-components/DirectoryInsideBox";
import FileBox from "../sub-components/FileBox";

const DirectoryBox = () => {
  return (
    <div className="w-[362px] h-[960px] flex flex-col gap-6 " >
      <div className="h-20 bg-background flex justify-between items-center p-6 border-b border-solid border-[2px] border-gray-200 ">
        <div className="w-[91px] h-[30px] font-inter text-[20px] leading-[30px] text-[#000000] ">
          <p>Directory</p>
        </div>
        <div>
          <Image src={dots} alt="call" width={40} height={40} />
        </div>
      </div>
      
      <div className="h-[940px] px-4">
        <div className="mb-6">
          <div className="w-[137px] flex gap-2 mb-2">
            <div className="font-inter text-[#000000] text-[14px] leading-[21px] ">
              <p>Team Members</p>
            </div>
            <div className="w-6 h-[22px] rounded-[24px] px-2 py-0.5 bg-gray-200 ">
              <p className="font-inter text-[#000000] text-3 leading-[18px] ">
                6
              </p>
            </div>
          </div>
          <div className="h-[375px] overflow-scroll scrollbar-none">

          <DirectoryInsideBox />
          <DirectoryInsideBox />
          <DirectoryInsideBox />
          <DirectoryInsideBox />
          <DirectoryInsideBox />
          <DirectoryInsideBox />
          <DirectoryInsideBox />
         
          </div>
        </div>
        <hr className="border-t-2" />
        <div className="px-4 mt-6   ">
          <div className="w-[137px] flex gap-2 mb-2">
            <div className="font-inter text-[#000000] text-[14px] leading-[21px] ">
              <p>Files</p>
            </div>
            <div className="w-[45px] h-[22px] rounded-[24px] px-2 py-0.5 bg-gray-200 text-center">
              <p className="font-inter text-[#000000] text-2 leading-[18px] ">
                125
              </p>
            </div>
          </div>
          <div className="h-[350px] overflow-scroll scrollbar-none ">
          <FileBox />
          <FileBox />
          <FileBox />
          <FileBox />
          <FileBox />
          <FileBox />
          <FileBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryBox;
