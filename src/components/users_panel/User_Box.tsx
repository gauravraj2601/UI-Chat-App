import Image from 'next/image';
import React from 'react';
import avatar from "../../assets/Frame 10.png";

interface User {
  name: string;
  password: string;
  token?: string;
  avatar?: string;
  email?: string;
  _id?: string;
}

interface UserBoxProps {
  users: User[];
  handleFunction:()=>void;
}

const User_Box: React.FC<UserBoxProps> = ({ users, handleFunction }) => {
  return (
    <>
      {users?.map((user) => (
        <div key={user._id} onClick={handleFunction} className="w-[317px] h-[93px] m-auto flex justify-center items-center mt-3 rounded-2xl bg-gray-200 ">
          <div className="w-[293px] h-[69px] p=3 flex gap-4">
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
                  <div className="w-[186px]  ">{user.name}</div>
                  <div className="w-[31px] opacity ">2h</div>
                </div>
                <div className="w-[229px] h-[18px] font-inter text-[12px] text-[#718096] ">
                  <p>{/* Display user-specific content, e.g., user.email */}</p>
                </div>
              </div>
              <div className="h-[22px] w-auto rounded-2xl p-2 border border-[#CBD5E0] flex justify-start items-center "> <p className="font-inter text-xs text-[ #CBD5E0] " >{user?.email}</p> </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default User_Box;
