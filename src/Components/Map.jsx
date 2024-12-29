import React from 'react'

function Map() {

 
  return (
    <div>
      
      <section className="my-6">
      <h2 className="text-xl font-semibold flex justify-center">Find Local Eco-Points</h2>
      <div className="mt-4">
        {/* <iframe
         
          src={`https://www.google.com/maps/embed/v1/place?key='AIzaSyDOaSWPVFoel2XDK70z6Suw8p3dx1MagHk'
                &q=Space+Needle,Seattle+WA`}
          className="w-full h-64 sm:h-80 lg:h-96 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}

                <iframe 
                 title="Eco Points Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890123!2d75.12345678901234!3d29.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2sParachute%20Immigration!5e0!3m2!1sen!2sin!4v1234567890123" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-96"
                    
                ></iframe>


      </div>
    </section>

    </div>
  )
}

export default Map
