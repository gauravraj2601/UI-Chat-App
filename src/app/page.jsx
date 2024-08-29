"use client"
import ChatBox from "@/components/message_page/ChatBox";
import DirectoryBox from "@/components/message_page/DirectoryBox";
import MessagePanel from "@/components/message_page/MessagePanel";
import Sidebar from "@/components/message_page/Sidebar";
import Image from "next/image";
// import { useAuth } from "./auth-provider";

export default function Home() {
  // const {auth} = useAuth()
  // console.log(auth)
  return (
    <div className="w-[1440px]  h-[960px]  bg-background flex m-auto border-2 border-gray-200">
       
          <Sidebar />
          <MessagePanel />
          <ChatBox />
          <DirectoryBox />
       
    </div>
  );
}
