

import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
  } from '@chakra-ui/react'
  
  import Cookies from "js-cookie"
import axios from 'axios';
import { useState } from 'react'
  import { Link } from 'react-router-dom'
import useApi from '../../Utils/useAxios';
  
  export default function SignIn() {
    const { loading, data, error, fetchData } = useApi();
    console.log(error)
   
    const [userDetails,setUserDetails]=useState({
      phone:"",
      password:""
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      
      // If the input is for phone, remove non-numeric characters and limit to 10 digits
      if (name === 'phone') {
          const numericValue = value.replace(/\D/g, '').slice(0, 10); // Remove non-numeric characters and limit to 10 digits
          setUserDetails(prevState => ({
              ...prevState,
              [name]: numericValue
          }));
      } else {
          setUserDetails(prevState => ({
              ...prevState,
              [name]: value
          }));
      }
  };
     
    

    const handleSubmit = async()=>{
      try {
        fetchData('/api/user/login',"POST",userDetails);
        // const res  = axios.post('http://localhost:5000/api/user/login',userDetails)
      } catch (error) {
        
        console.log(error)
      }
      console.log(userDetails)
    }
    return (
      <Stack minH={'80vh'} mt={3} direction={{ base: 'column', md: 'row' }}>
        
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
        
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <Heading fontSize={'xl'}>
            {loading && <p>Loading...</p>}
      {error && <p className='error'>Error: {error.error}</p>}
      {data && (
        <div>
          <h2 className='success'>Logged In..</h2>
        </div>
      )}

            </Heading>
            
            <FormControl id="email">
              <FormLabel>Phone No.</FormLabel>
              <Input type="email"  name='phone' onChange={handleChange} value={userDetails.phone}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={handleChange} value={userDetails.password} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.500'}>Forgot password?</Text>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit}>
                Sign in 
              </Button> 
              <Text>Not An Account  <Link to={'/signup'} style={{marginLeft:"10px", color:"blue", fontWeight:"600"}}>Register</Link></Text>
          
  
           
            </Stack>
            
          </Stack>
          
          
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    )
  }