
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export let data

function Login() {
  
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()

  
  const handleSubmit = async (e) => {
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
       data = await res.json()
      if (res.ok) {
        localStorage.setItem("myID", data._id)
        navigate('/') 
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleInput(e) {
    const { id, value } = e.target
    setLoginData({ ...loginData, [id]: value })
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md login-animation">
     
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold fade-in">Welcome back!</h2>
         
          <button
            onClick={() => navigate('/')}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 fade-in">
            <span className="text-gray-700">Email*</span>
            <input
              type="email"
              value={loginData.email}
              required
              id="email"
              onChange={handleInput}
              className="block w-full p-2 pl-2 text-sm text-gray-700 border border-gray-300 rounded fade-in"
              placeholder="example@example.com"
            />
          </label>
          <label className="block mb-2 fade-in">
            <span className="text-gray-700">Password*</span>
            <input
              type="password"
              value={loginData.password}
              required
              onChange={handleInput}
              id="password"
              className="block w-full p-2 pl-2 text-sm text-gray-700 border border-gray-300 rounded fade-in"
              placeholder="Password"
            />
          </label>
          <div className="flex items-center mb-2 fade-in">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <span className="text-gray-700">Remember me</span>
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full fade-in"
          >
            Login
          </button>
          <p className="text-sm text-gray-700 mt-2 fade-in">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-800">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;


