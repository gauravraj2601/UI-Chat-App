import React from "react";
import Image from "next/image";
import avatar from "../../assets/Frame 10.png";
import online from "../../assets/online.svg";
import call from "../../assets/call.svg";
import media from "../../assets/media.svg";
import send from "../../assets/send.svg";
import SenderChat from "./Chats/SenderChat";
import UserChat from "./Chats/UserChat";
const ChatBox = () => {
  return (
    <div className="w-[640px]  bg-background  ">
      <div className="h-20 bg-background flex justify-between items-center p-6 ">
        <div className="flex gap-4">
          <div>
            {" "}
            <Image
              className="rounded-[10px]"
              src={avatar}
              alt="avatar"
              height={40}
              width={40}
            />{" "}
          </div>
          <div className="w-[111px] h-[43px] flex flex-col justify-center items-start ">
            <div className=" font-inter text-[20px] leading-[25px] text-[#000000] ">
              <p>Group Chat</p>
            </div>
            <div className="flex justify-start items-center  gap-2">
              <div>
                {" "}
                <Image src={online} alt="online" width={10} height={10} />{" "}
              </div>
              <div className="font-inter text-[12px] leading-[18px] opacity-60">
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[94px] h-[44px] px-4 py-[10px] flex gap-2 justify-center items-center ">
          <div>
            <Image src={call} alt="call" width={24} height={24} />
          </div>
          <div className=" w-[30px] h-5 font-inter text-[16px] leading-[20px] bg-blue ">
            <p>Call</p>
          </div>
        </div>
      </div>
      <hr className="border-t-2" />
      <div className="h-[879px] flex flex-col justify-between border-r-2 border-b-2  border-gray-200">
        {/* // chat box */}
        <div className="h-[780px] p-6 flex flex-col gap-[32px] bg-background overflow-scroll scrollbar-none">
          <SenderChat chat={"How are you?"} />
          <UserChat chat={"I am good, How about You?"} />
          <SenderChat chat={"How are you?"} />
          <UserChat chat={"I am good, How about You?"} />
          <SenderChat chat={"How are you?"} />
          <UserChat chat={"I am good, How about You?"} />
          <SenderChat chat={"How are you?"} />
          <UserChat chat={"I am good, How about You?"} />
          <SenderChat chat={"How are you?"} />
          <UserChat chat={"I am good, How about You?"} />
          <SenderChat chat={"How are you?"} />
          <UserChat chat={"I am good, How about You?"} />
        </div>

        <div className="h-[96px] p-6 flex justify-center items-center gap-6 bg-background">
          <div>
            {" "}
            <Image src={media} alt="media-logo" width={24} height={24} />{" "}
          </div>
          <div className="w-[554px] h-[48px] rounded-[12px] border border-[#E2E8F0] flex justify-between items-center px-5 py-[10px] ">
            <div className="h-[21px] border border-[#ffffff] ">
              {" "}
              <input
                className="w-[450px] font border-none focus:border-none outline-none"
                type="text"
                placeholder="Type a message"
              />{" "}
            </div>
            <div>
              {" "}
              <Image src={send} alt="send" width={24} height={24} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
