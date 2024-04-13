import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Stack, Heading,Text,Divider,ButtonGroup,Button,Image} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useApi from '../Utils/useAxios'

function PlayerById() {
    
  const { loading, data, error, getPayerById } = useApi();
    const {id}=useParams()
 useEffect(()=>{
getPayerById(`api/player/getplayer/${id}`,"GET")
 },[])
 console.log(data)

  return (
   <div div className='text-white'>
   <Heading fontSize={'xl'}>
    
            {loading && <p >Loading...</p>}
            {error && <p className='error'>{error.error}</p>}
            


          </Heading>
          {data && (
              <div>
                 <Image
                 src={data?.player.profileUrl}       
    //   src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt={data?.player.firstname}
      borderRadius='lg'
    />
     <Heading size='xs' textTransform='uppercase' mt={2}>
          {data?.player?.firstname}{data?.player?.lastname}
        </Heading> 
        <Heading size='xs' textTransform='uppercase' mt={2}>
        {data?.player.email}
        </Heading> 
         <Heading size='xs' textTransform='uppercase' mt={2}>
         {data?.player.phone}
        </Heading>
        
        
        <Heading size='xs' textTransform='uppercase'  textAlign={"left"} mt={4} ml={2}>
       MPl Stats
        </Heading>
        
        <table className='mt-[1rem]'>
  <tr>
    <th>Bowling</th>
    <th>Batting</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>222</td>
    <td>33</td>
    <td>55</td>
  </tr>
</table>

              </div>
            )}
   
   </div>
  )
}

export default PlayerById