// AllRoutes.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../Auth/SignUp/SignUp";
import App from "../App";
import NavBar from "../Default/NavBar/NavBar";
import PublicLayout from "../Layout/PublicLayout/PublicLayout";
import Home from "../Layout/Home/Home";
import SignIn from "../Auth/SignIn/SignIn";
import PlayerRegister from "../Layout/Home/PlayerRegister";
import AdminRoutes from "../Layout/AdminRoutes";
import AdminHome from "../Layout/AdminHome";
import UserHome from "../Layout/userLayout/UserHome";
import UserLayout from "../Layout/userLayout/UserLayout";
import Players from "../Admincomp/Players";
import PlayerById from "../Admincomp/PlayerById";

// Creating the router
const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        
        children: [
          {
            path: "",
            element: <Home/>,
    
          },
          {
            path: "signup",
            element: <SignUp/>,
    
          }, 
          {
            path: "signin",
            element: <SignIn/>,
    
          },  {
            path: "player-register",
            element: <PlayerRegister/>,
    
          },
        ],
      },{
        path: "/admin",
        element: <AdminRoutes />,
        children: [
            {
            path: "players",
            element: <Players/>,
    
          }, {
            path: "player/:id",
            element: <PlayerById/>,
    
          }, 
          
        ],
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <UserHome/>,
    
          }, 
          
        ],
      }
   
]);


// Wrapping the application with RouterProvider
const AllRoutes = ({ children }) => (
    <RouterProvider router={router}>
        <NavBar />
        <li>ujuyd</li>
        <li>ujuyd</li>
        <li>ujuyd</li>
        <li>ujuyd</li>
        <li>ujuyd</li>
        <li>ujuyd</li>
        <li>ujuyd</li>
        {children}
    </RouterProvider>
);

export default AllRoutes;
