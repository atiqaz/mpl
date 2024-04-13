import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, ChakraProvider, useColorMode, useColorModeValue } from '@chakra-ui/react'
import NavBar from './Default/NavBar/NavBar'
import SignUp from './Auth/SignUp/SignUp'
import ALlRoutes from './Routing/AllRoutes'
import { AuthProvider } from './Context/StoreContext'

function App() {
  const [count, setCount] = useState(0)
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

    
  

  return (
    <>
    
    <ChakraProvider>
      <AuthProvider>

    <ALlRoutes>
      <NavBar/>
     
    </ALlRoutes>
      </AuthProvider>
  </ChakraProvider>
   
        
    </>
  )
}

export default App
