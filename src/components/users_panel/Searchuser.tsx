import { AuthContext, useAuth } from '@/app/auth-provider';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import debounce  from 'lodash/debounce';
import React, { useContext, useEffect, useState } from 'react'
import User_Box from './User_Box';
import { Spinner } from '@chakra-ui/react'
const Searchuser = () => {
    const [loading, setLoading]=useState<boolean>(false)
    const [search, setSearch]= useState<string>("");
    const [searchResult, setSearchResult]=useState([])

    const {user}= useAuth();
    const toast = useToast();
    console.log("Search",user)
    const debouncedSetSearch = debounce((value: string) => {
        setSearch(value);
      }, 1000); 
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const config = {
              headers: {
                Authorization: `Bearer ${user?.token}`
              }
            }
            const url = search !== "" ? `http://localhost:8080/api/users?search=${search}` : "http://localhost:8080/api/users";
            const { data } = await axios.get(url, config);
           setLoading(false);
            setSearchResult(data);
          } catch (error:any) {
            // toast({
            //   title: "Error Occured!",
            //   description: "Failed to Load the Search Results",
            //   status: "error",
            //   duration: 5000,
            //   isClosable: true,
            //   position: "bottom-left",
            // });
            console.log(error.message)
          }
        };
          fetchData();
      }, [search,user]);
    
      const handleSearch=async(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        debouncedSetSearch(value); 
      }
      console.log(search)
      console.log(searchResult)
  return (
    <>
    <div className="h-[48px] w-[301px] flex items-center gap-3 px-5 py-[10px] rounded-[12px]  bg-[#F3F3F3] ">
          <div className="w-[50px] h-[17px] text-sm font-inter font-normal   ">
            Search
          </div>
          <div>
            <input
              className="h-[21px] text-sm font-inter font-normal bg-[#F3F3F3] leading-6 placeholder-[#000000] border-none focus:border-none outline-none"
              type="search"
              placeholder="Search messages"
              onChange={handleSearch}
            />{" "}
          </div>
        </div>
        <div className="h-[780px] overflow-scroll scrollbar-none">
          {loading?<Spinner size={"xl"} ml={"30%"} thickness='4px' color='red.500' />:(
             <User_Box users={searchResult} handleFunction={()=>accessChat()} />
          )}
      </div>
    </>
  )
}

export default Searchuser