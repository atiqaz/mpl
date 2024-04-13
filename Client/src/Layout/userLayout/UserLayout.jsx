import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/StoreContext';
import {useNavigate} from "react-router-dom"
import {Button} from "@chakra-ui/react"
import Cookies from "js-cookie"
function UserLayout() {
  const { tokens, setTokens,role, setRole } = useContext(AppContext);
  
  const navigate = useNavigate()
  useEffect(() => {
    console.log(role)
   if(!role || !tokens ) {
    navigate('/signin')
  } if(role==="admin"){
     navigate('/admin')
   }

  }, [])
  const logout =()=>{
    Cookies.remove("token");
    Cookies.remove("role");
    window.location.reload()
  }
  return (
    <div>
      <h1>user layout</h1>
      <Button mt={3} onClick={logout}>logout  </Button>
    </div>
  )
}

export default UserLayout