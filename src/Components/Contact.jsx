

// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// function Contact() {
//   // State to handle success and error messages
//   const [statusMessage, setStatusMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     // Append access key for Web3Forms API
//     formData.append("access_key", "2fad4464-a544-4217-b5f3-cd55676d47d6");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     setIsLoading(true);
//     setStatusMessage('');  // Clear previous status message

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       });

//       // Log the full response for debugging purposes
//       const data = await res.json();
//       console.log("API Response:", data);  // Log the response

//       if (data.success) {
//         // Show success message if form submission is successful
//         setStatusMessage('Message sent successfully!');
//       } else {
//         // Show error message if submission fails
//         setStatusMessage(`Error: ${data.message || 'Please try again.'}`);
//       }
//     } catch (error) {
//       // Handle network or other errors
//       console.error("Error submitting form:", error);
//       setStatusMessage('There was an error, please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       <section>
//         <div className="flex flex-col md:flex-row justify-between p-8 md:p-16">
//           <div className="md:w-1/3 mb-8 md:mb-0">
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-2">Contact us</h2>
//               <p className="flex items-center text-gray-700">
//                 <i className="fas fa-envelope mr-2"></i>
//                 ritvik0314@gmail.com
//               </p>
//             </div>
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-2">Press inquiries</h2>
//               <p className="flex items-center text-gray-700">
//                 <i className="fas fa-envelope mr-2"></i>
//                 ritviksoni1430@gmail.com
//               </p>
//             </div>
//             <div className="border-t border-gray-300 my-6 w-[400px]"></div>
//           </div>

//           <div className="md:w-2/3">
//             <form className="space-y-4" onSubmit={onSubmit}>
//               <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="flex-1 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="flex-1 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//                 required
//               ></textarea>

//               {/* Removed Google reCAPTCHA */}

//               <button
//                 type="submit"
//                 className="w-full md:w-auto bg-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
//                 disabled={isLoading}  // Disable button during submission
//               >
//                 {isLoading ? 'Sending...' : 'Send Your Message'}
//               </button>
//             </form>

//             {/* Show success or error message */}
//             {statusMessage && (
//               <div className="mt-4 text-center text-lg font-semibold">
//                 <p className={statusMessage.includes('success') ? 'text-green-600' : 'text-red-600'}>
//                   {statusMessage}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Contact;









import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


function Contact() {
  // State to handle success and error messages
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append access key for Web3Forms API
    formData.append("access_key", "2fad4464-a544-4217-b5f3-cd55676d47d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setIsLoading(true);
    setStatusMessage('');  // Clear previous status message

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      // Log the full response for debugging purposes
      const data = await res.json();
      console.log("API Response:", data);  // Log the response

      if (data.success) {
        // Show success message if form submission is successful
        setStatusMessage('Message sent successfully!');
      } else {
        // Show error message if submission fails
        setStatusMessage(`Error: ${data.message || 'Please try again.'}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting form:", error);
      setStatusMessage('There was an error, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Animation Trigger for Form Elements
  useEffect(() => {
    const formElements = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fade-in');
      }, index * 200);
    });
  }, []);

  return (
    <div>
      <Navbar />

      <section>
        <div className="flex flex-col md:flex-row justify-between p-8 md:p-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Contact us</h2>
              <p className="flex items-center text-gray-700">
                <i className="fas fa-envelope mr-2"></i>
                ritvik0314@gmail.com
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Press inquiries</h2>
              <p className="flex items-center text-gray-700">
                <i className="fas fa-envelope mr-2"></i>
                ritviksoni1430@gmail.com
              </p>
            </div>
            <div className="border-t border-gray-300 my-6 w-[400px]"></div>
          </div>

          <div className="md:w-2/3">
            <form className="contact-form space-y-4" onSubmit={onSubmit}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="flex-1 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              ></textarea>

              <button
                type="submit"
                className="submit-btn w-full md:w-auto bg-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                disabled={isLoading}  // Disable button during submission
              >
                {isLoading ? 'Sending...' : 'Send Your Message'}
              </button>
            </form>

            {/* Show success or error message */}
            {statusMessage && (
              <div className="mt-4 text-center text-lg font-semibold">
                <p className={statusMessage.includes('success') ? 'text-green-600' : 'text-red-600'}>
                  {statusMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;

