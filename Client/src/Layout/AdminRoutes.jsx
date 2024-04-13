import React, { useContext, useEffect } from 'react'

import { AppContext } from '../Context/StoreContext';
import {useNavigate} from "react-router-dom"
import { Outlet } from 'react-router-dom'
import {Button} from "@chakra-ui/react"
import Sidenav from './admin/Sidenav';

function AdminRoutes() {
  const { tokens, setTokens,role, setRole } = useContext(AppContext);
  
  const navigate = useNavigate()
  useEffect(() => {
    console.log(role)
   if(!role || !tokens ) {
    navigate('/signin')
  } if(role==="user"){
     navigate('/user')
   }

  }, [])


  return (
    <div>
    
    <div className="sidenav bg-slate-500">

    <Sidenav/>
    <div className="h-screen flex-1 p-7">
      <div className="ml-[15vw]">

       <Outlet />
      </div>
      </div>
    </div>
   
    </div>
  )
}

export default AdminRoutes