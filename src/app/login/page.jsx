
"use client";

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../auth-provider";
import { useRouter } from "next/navigation";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router= useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {user, setUser } = useContext(AuthContext);
 console.log(user)
  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    axios.post("http://localhost:8080/api/login",
        {
          email,
          password
        
    }).then((res)=>(
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      }),
      setUser(res.data),
      localStorage.setItem("userInfo", JSON.stringify(res.data)),
      setLoading(false),
      router.push("/")
    )).catch((error)=>(
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      }),
      setLoading(false)
    ))
   
  };

  return (
    <VStack w="500px" m="auto" mt="30px"  spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;


/*

import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Heading,
    Button
  } from '@chakra-ui/react'
//   import {loginUser} from "../Redux/Authentication/action"
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    // const dispatch= useDispatch()
    // const navigate= useNavigate()
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        let userDetails={
            email,
            password,
        }
        // dispatch(loginUser(userDetails)).then(()=>{
        //     navigate("/dashboard")
        // })
    
    }

  return (
    <Box  w={'40%'} h="300px" m={'100px'} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="5">
        <form>
        <Heading>Login</Heading>
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}  />
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)}  />
        </FormControl>
       
        <Button mt={4} bg={"blue.500"} onClick={handleSubmit}>Submit</Button>
        </form>
    </Box>
  )
}

export default Login

*/