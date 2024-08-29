import React from "react";
import Image from "next/image";
import avatar from "../../../assets/Frame 10.png";

interface SenderChatProps {
  chat: string; // Assuming chat is a string, adjust the type accordingly
}

const SenderChat: React.FC<SenderChatProps> = ({ chat }) => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <Image
            className="rounded-[8px]"
            src={avatar}
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
        <div
          className="h-[37px] px-4 py-2 rounded-[12px] bg-[#F1F1F1] text-[#000000]  font text-[14px]  "
        >
          {chat}
        </div>
      </div>
    </div>
  );
};

export default SenderChat;
