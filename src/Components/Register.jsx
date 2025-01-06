// // import React,{useState} from 'react'
// // import axios from 'axios';


// // function Register() {

// //     const [ user , setUser] = useState({
// //         username : '',
// //         email : '',
// //         password: '',
// //         confirmPassword:''
// //       })
        
// //         const handleSubmit = (e) => {
// //             e.preventDefault();

// //             // console.log({ username, email, password });
// //         };

// //         const userdata = () => {

// //             const { username , email , password , confirmPassword } = user
// //             if( username && email && password &&( password === confirmPassword )){
            
// //                 axios.post("localhost:4000/register" , user) 
// //                 .then( res => console.log(res))
                
// //             }

// //             else{
// //                 alert("invalid input")
// //             }

// //         }

// //         const handleChange = e =>{
// //             const {id , value} = e.target 
// //             setUser({
// //                 ...user,[id]: value
// //             })
// //         }
// //   return (
// //     <div>
// //             <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //                     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //                         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                        
// //                         <form onSubmit={handleSubmit}>
// //                             <div className="mb-4">
// //                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
// //                                     Username
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     id="username"
// //                                     value={user.username}
// //                                     onChange={handleChange}
// //                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //                                     Email
// //                                 </label>
// //                                 <input
// //                                     type="email"
// //                                     id="email"
// //                                     value={user.email}
// //                                     onChange={handleChange}
// //                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-4">
// //                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
// //                                     Password
// //                                 </label>
// //                                 <input
// //                                     type="password"
// //                                     id="password"
// //                                     value={user.password}
// //                                     onChange={handleChange}
// //                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="mb-6">
// //                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
// //                                     Confirm Password
// //                                 </label>
// //                                 <input
// //                                     type="password"
// //                                     id="confirmPassword"
// //                                     value={user.confirmPassword}
// //                                     onChange={handleChange} 
// //                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div className="flex items-center justify-between">
// //                                 <button
// //                                     onClick={userdata}
// //                                     type="submit"
// //                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                                 >
// //                                     Register
// //                                 </button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //     </div>
// //   )
// // }

// // export default Register









import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [visibility, setVisibility] = useState(true);
  const navigate = useNavigate();

  useEffect(() => { 
    const timer = setTimeout(() => {
      document.querySelector('.sign-up-container').classList.add('fade-in');
    }, 100);

    return () => clearTimeout(timer);
  }, []);
 console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        const user = res.json();
        if (res.ok) {
          localStorage.setItem('myID', user._id);
          navigate('/');
        }
        return user;
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClose = () => {
    navigate('/'); 
  };

  return (
    <div
      className="bg-gray-50 p-8 rounded-lg shadow-md w-96 m-auto mt-[150px] sign-up-container"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <button
  onClick={handleClose}
  className="bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 p-2 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition duration-200 ease-in-out"
  aria-label="Close"
>
  &times;
</button>

      </div>
      <p className="text-center mb-6">
        Already have an account?{' '}
        <Link to={'/login'} className="text-blue-500">
          Sign In
        </Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            required
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="phoneNumber"
            required
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phoneNumber}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 relative">
          <span
            className="material-symbols-outlined cursor-pointer absolute right-2 top-3"
            onClick={() => setVisibility(!visibility)}
          >
            {visibility ? 'visibility' : 'visibility_off'}
          </span>
          <input
            type={visibility ? 'password' : 'text'}
            id="password"
            required
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

