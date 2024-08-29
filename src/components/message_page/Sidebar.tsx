import React from "react";
import Image from "next/image";
import set from "../../assets/Iconsax.svg";
import home from "../../assets/home.svg";
import huddle from "../../assets/huddle.svg";
import search from "../../assets/search.svg";
import message from "../../assets/message.svg";
import cal from "../../assets/cal.svg";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="w-[88px] p-4  flex flex-col justify-between items-center shadow bg-background z-10">
      <div className="w-14 h-[352px]  flex flex-col justify-center items-center gap-12 border-black">
        <div className="w-14 h-14 font-asap font-bold text-xl text-white bg-logo rounded-2xl text-center p-3">
          Q
        </div>
        <div className="w-6 h-[248px] flex flex-col gap-8">
          <Image src={home} alt="home-icon" width={24} height={24} />
          <Link href={"/"}>
          <Image src={message} alt="message" width={24} height={24} />
          </Link>
          <Link href={"/searchuser"}>
          <Image src={search} alt="search" width={24} height={24} />
          </Link>
          <Image src={huddle} alt="huddle" width={24} height={24} />
          <Image src={cal} alt="cal" width={24} height={24} />
        </div>
        <Link href={"/login"}><p>Login</p> </Link>
        <Link href={"/signup"}><p>SignUp</p> </Link>
      </div>

      <div className="mb-2">
        <Image src={set} alt="iconsax" width={24} height={24} />
      </div>
    </div>
  );
};

export default Sidebar;
