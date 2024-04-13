

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
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useApi from '../../Utils/useAxios';

export default function SignUp() {

  const { loading, data, error, fetchData, AddUser } = useApi();

  const initialData = {
    name: "",
    email: "",
    phone: null,
    password: "",
    age: null,
    teamName: "",
    role: "user"
  }

  const [userDetails, setUserDetails] = useState(initialData)

  const changeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((pre) => ({ ...pre, [name]: value }))

  }

  const handleClick = () => {
    AddUser('api/user/register', "POST", userDetails)
    console.log(userDetails)
  }
  return (
    <Stack minH={'80vh'} mt={3} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign Up to your account</Heading>
          <Heading fontSize={'xl'}>
            {loading && <p >Loading...</p>}
            {error && <p className='error'>{error.error}</p>}
            {data && (
              <div>
                <h2 className='success'>Successfully Registered</h2>
              </div>
            )}


          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input onChange={changeData} name='email' value={userDetails.email} type="email" />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input onChange={changeData} name='phone' value={userDetails.phone} type="text" />
          </FormControl><FormControl id="">
            <FormLabel>Name</FormLabel>
            <Input onChange={changeData} name='name' cvalue={userDetails.name} type="Name" />
          </FormControl>
            <FormLabel>Password</FormLabel>
            <Input onChange={changeData} name='password' cvalue={userDetails.password} type="Name" />
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input onChange={changeData} name='age' value={userDetails.age} type="number" />
          </FormControl>
          <FormControl id="teamname">
            <FormLabel>Team Name</FormLabel>
            <Input onChange={changeData} name='teamName' value={userDetails.teamName} type="text" />
          </FormControl>
          <Stack spacing={6}>

            <Button colorScheme={'blue'} variant={'solid'} onClick={handleClick}>
              Sign Up
            </Button>
            <Text>Already Have Account <Link to={'/signin'} style={{ marginLeft: "10px", color: "blue", fontWeight: "600" }}>Login</Link></Text>



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