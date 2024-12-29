import React from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'


function Contact() {

  
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ritviksoni1430@gmail.com");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };
  return (
    <div>
          <Navbar/>
                   
 
                <section>
                    {/* <form onSubmit={onSubmit}>
                         <input className="bg-black" type="text" name="name"/>
                         <input className="bg-slate-600" type="email" name="email"/>
                         <textarea className="bg-slate-300" name="message"></textarea>
                         <button type="submit">Submit Form</button>
                    </form> */}
            <div className="flex flex-col md:flex-row justify-between p-8 md:p-16">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">Contact us</h2>
                            <p className="flex items-center text-gray-700">
                                <i className="fas fa-envelope mr-2"></i>
                                contact@ecohero.app
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-2">Press inquiries</h2>
                            <p className="flex items-center text-gray-700">
                                <i className="fas fa-envelope mr-2"></i>
                                press@ecohero.app
                            </p>
                        </div>
                        <div className="border-t border-gray-300 my-6 w-[400px]"></div>
                        {/* <div>
                            <h2 className="text-xl font-bold mb-2">Company</h2>
                            <p className="text-gray-700">
                                BytePioneers s. r. o.<br />
                                Elektrarenska 1732/3<br />
                                Dubnica nad Vahom<br />
                                Slovakia
                            </p>
                            <p className="flex items-center text-blue-500 mt-4">
                                <i className="fas fa-globe mr-2"></i>
                                <a href="https://bytepioneers.com" target="_blank" rel="noopener noreferrer">BytePioneers.com</a>
                            </p>
                        </div> */}
                    </div>  

                  <div className="md:w-2/3">
                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <input type="text" name="name" placeholder="Name" className="flex-1 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                <input type="email" name="email" placeholder="Email" className="flex-1 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <input type="text" name="subject" placeholder="Subject" className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            <textarea name="message" placeholder="Your Message" className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" required></textarea>
                            <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                            <button type="submit" className="w-full md:w-auto bg-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">Send Your Message</button>
                        </form>
                  </div>

        </div>  
                </section>
                    
         <Footer/>
    </div>
  )
}

export default Contact
