import React from 'react'
import { motion } from "framer-motion";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Map from './Components/Map.jsx'
import Footer from './Components/Footer.jsx'
import Features from './Components/Features.jsx'
import Comunity from './Components/Comunity.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import Climate from './Components/Climate.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Challenge from "./Components/Challange.jsx";
import Ecopoints from './Components/Ecopoints.jsx'
import ImpactTracker from './Components/ImpactTracker.jsx'
import GetStarted from './Components/GetStarted.jsx'
import FindMore from './Components/FindMore.jsx'
import './index.css'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
        {
          path:"/",
          element:<App/>
        },
        {
          path:"/features",
          element:<Features/>
        },
        {
          path:"/community",
          element:<Comunity/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/getstarted",
          element:<GetStarted/>
        },
        {
          path:"/findmore",
          element:<FindMore/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
])

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router}/>
)
