"use client"

import Sidebar from '@/components/message_page/Sidebar'
import UserPanel from '@/components/users_panel/UserPanel'
import React from 'react'

const UserSearch = () => {
  return (
    <div className="w-[1440px]  h-[1024px]  bg-background flex m-auto border-2 border-gray-200">
       
    <Sidebar />
    <UserPanel />
   
 
</div>
  )
}

export default UserSearch