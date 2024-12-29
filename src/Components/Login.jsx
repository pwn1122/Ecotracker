// import React,{useState} from 'react'
// import { Link } from "react-router-dom";


// function Login() {

//      const [ user , setUser] = useState({
//             email : '',
//             password: ''
//             })

//     const handleLogin = (e) => {
//         e.preventDefault();
       
//     };

//     const handleChange = e =>{
//         const {id , value} = e.target 
//         setUser({
//             ...user,[id]: value
//         })
//     }
//   return (
//     <div>
//              <div className="min-h-screen flex items-center justify-center bg-gray-100">
//                     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//                         <form onSubmit={handleLogin}>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//                                     Username
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     value={user.username}
//                                     onChange={handleChange}
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     placeholder="Enter your username"
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     value={user.password}
//                                     onChange={handleChange}
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                                     placeholder="Enter your password"
//                                 />
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Login
//                                 </button>

//                                 <div className="mt-4 text-center">
//                             <p className="text-gray-600">Don't have an account? <Link to="/regeister" className="text-blue-500 hover:text-blue-700">Regeister</Link></p>
//                         </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//     </div>
//   )
// }

// export default Login

import React, { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const handleSubmit =  async(e) => {
    loginData.rememberMe = rememberMe
    e.preventDefault();
    try {   
     const res = await fetch('http://localhost:4000/login', {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include'
      })
      const user = await res.json()
      if(res.ok) {
       localStorage.setItem("myID",user._id )
       navigate('/')
      }  
    } catch(err){
      console.log(err) ;
    }
  };
  function handleInput(e) {
    const { id, value } = e.target
    setLoginData({ ...loginData, [id]: value })
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Email*</span>
            <input
              type="email"
              value={loginData.email}
              required
              id="email"
              onChange={handleInput}
              className="block w-full p-2 pl-2 text-sm text-gray-700 border border-gray-300 rounded"
              placeholder="example@example.com"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Password*</span>
            <input
              type="password"
              value={loginData.password}
              required
              onChange={handleInput}
              id='password'
              className="block w-full p-2 pl-2 text-sm text-gray-700 border border-gray-300 rounded"
              placeholder="Password"
            />
          </label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id='rememberMe'
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <span className="text-gray-700">Remember me</span>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Login
          </button>
          <p className="text-sm text-gray-700 mt-2">
            Don't have an account? <Link to="/signUp" className="text-blue-600 hover:text-blue-800">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
