'use client'

import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Icon,
    WrapItem,
    Select,
} from '@chakra-ui/react'
import { useState } from 'react'
import useApi from '../../Utils/useAxios'

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
]

const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    )
}

export default function PlayerRegister() {

    const { loading, data, error, playerRegister } = useApi();

    const initialData = {
        firstname: '',
        lastname: "",
        phone: "",
        email: "",
        role: ""

    }
    const [selectedFile, setSelectedFile] = useState(null);
    const [details, setDetails] = useState(initialData)

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleChangeData = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDetails((pre) => ({ ...pre, [name]: value }))
    }

    const handleSubmit = async () => {
        console.log(details)
       const rr =await playerRegister("api/player/register", "POST", details, selectedFile)
      
       if(!error){
            setDetails(initialData)
            setSelectedFile(null)

        }
    }

    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '2xl', sm: '4xl', md: '3xl', lg: '6xl' }}>
                        Register YourSelf as {' '}
                        <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                            A Player  &
                        </Text>{' '}
                        for Upcoming MPL Event
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'} >
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Join our team
                            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            We’re looking for amazing engineers just like you! Become a part of our
                            rockstar engineering team and skyrocket your career!
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={4} >
                        <WrapItem mb={3} className='registerprofile'>
                            <Avatar size='xl' name='Segun Adebayo' src={selectedFile ? URL.createObjectURL(selectedFile) : 'https://bit.ly/sage-adebayo'} />
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                        </WrapItem>
                        <Stack spacing={4}>
                            {loading && <p>Loading...</p>}
                            {error && <p className='error'>Error: {error.error}</p>}
                            {data && (
                                <div>
                                    <h2 className='success'>Player Registered..</h2>
                                </div>
                            )}
                            <Input
                                onChange={handleChangeData}
                                name='firstname'
                                value={details.firstname}
                                placeholder="Firstname"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                onChange={handleChangeData}
                                name='lastname'
                                value={details.lastname}
                                placeholder="firstname@lastname.io"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                onChange={handleChangeData}
                                name='phone'
                                value={details.phone}
                                placeholder="+91 1234567890"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />

                            <Input
                                onChange={handleChangeData}
                                name='email'
                                value={details.email}
                                placeholder="Enter Address"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Select placeholder='Your Role'
                                onChange={handleChangeData}
                                name='role'
                                value={details.role}>
                                <option value='Bowler'>Bowler</option>
                                <option value='BatsMan'>BatsMan</option>
                                <option value='All Rounder'>All Rounder</option>
                            </Select>
                            {/* <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                                Upload CV
                            </Button> */}
                        </Stack>
                        <Button
                            onClick={handleSubmit}
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
        </Box>
    )
}