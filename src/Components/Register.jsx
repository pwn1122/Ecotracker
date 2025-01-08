
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [visibility, setVisibility] = useState(true); // For toggling password visibility
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const navigate = useNavigate();

  useEffect(() => { 
    const timer = setTimeout(() => {
      document.querySelector('.sign-up-container').classList.add('fade-in');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled before submitting
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())  // Wait for JSON response
      .then((user) => {
        if (user && user._id) {  // Check if user data exists and has _id
          localStorage.setItem('myID', user._id);
          setSuccessMessage('User registered successfully!');  // Set success message
          setTimeout(() => {
            navigate('/login');  // Navigate to login after showing the message
          }, 1000);  // Show the success message for 1 seconds
        } else {
          alert(user?.error || "An error occurred");
        }
      })
      .catch((err) => {
        console.error('Error during signup:', err);
        alert("An error occurred during signup");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleClose = () => {
    navigate('/login');
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

      {successMessage && (
        <div className="mb-4 text-center text-green-500">
          {successMessage} {/* Display success message */}
        </div>
      )}

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
               className="cursor-pointer absolute right-2 top-3"
               onClick={() => setVisibility(!visibility)}
               >
               {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
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

