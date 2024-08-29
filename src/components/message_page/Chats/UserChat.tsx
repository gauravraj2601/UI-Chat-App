import React from 'react';
import Image from 'next/image';
import avatar from '../../../assets/Frame 10.png';

interface UserChatProps {
  chat: string; // Assuming chat is a string, adjust the type accordingly
}

const UserChat: React.FC<UserChatProps> = ({ chat }) => {
  return (
    <div>
      <div className="flex justify-end gap-4">
        <div className="h-[37px] px-4 py-2 rounded-[12px] bg-[#615ef0] text-[#000000]  font text-[14px] ">
          {chat}
        </div>
        <div>
          <Image
            className="rounded-[8px]"
            src={avatar}
            alt="avatar"
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default UserChat;
