
import React from 'react'
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Navbar from './Navbar'
import Footer from './Footer'

function FindMore() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1 }} // Transition effect
    >
         <div>
            <Navbar />
            <motion.header 
              className="bg-blue-500 text-white text-center py-4"
              initial={{ y: -50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1 }}
            >
                <h1 className="text-3xl font-bold">The Climate Action Tracker</h1>
                <div className="mt-2">
                   <a href="https://x.com/ritviksoni11?t=v1N4XU45yskArH3_BEEubg&s=09">
                      <i className="fab fa-twitter mx-2"></i>
                   </a> 
                    <a href="https://www.facebook.com/share/HmckeH2swdeA1h2N/">
                      <i className="fab fa-facebook mx-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ritvik-soni-80694b29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <i className="fab fa-linkedin mx-2"></i>
                    </a>
                </div>
            </motion.header>

            <motion.main 
              className="p-4"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.2 }}
            >
                <motion.section 
                  className="bg-white p-4 rounded shadow-md mb-4"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 font-bold text-xl mb-2 md:mb-0">
                            What is CAT?
                        </div>
                        <div className="md:w-3/4 md:border-l md:pl-4 border-blue-500">
                            <p>The Climate Action Tracker is an independent scientific project that tracks government climate action and measures it against the globally agreed Paris Agreement aim of "holding warming well below 2°C, and pursuing efforts to limit warming to 1.5°C." A collaboration of two organisations, Climate Analytics and NewClimate Institute, the CAT has been providing this independent analysis to policymakers since 2009.</p>
                            <p className="mt-2">CAT quantifies and evaluates climate change mitigation targets, policies and action. It also aggregates country action to the global level, determining likely temperature increases during the 21st century using the <a href="#" className="text-blue-500">MAGICC climate model</a>. CAT further develops sectoral analysis to illustrate required pathways for meeting the global temperature goals.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section 
                  className="bg-white p-4 rounded shadow-md"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 font-bold text-xl mb-2 md:mb-0">
                            CAT tracks 39 countries and the EU covering around 85% of global emissions
                        </div>
                        <div className="md:w-3/4 md:border-l md:pl-4 border-blue-500">
                            <p>Effect of climate policies and action on emissions: The policies a government has implemented or enacted and how these are likely to affect national emission over the time period to 2030, and where possible beyond.</p>
                            <p className="mt-2"> <span className="font-bold">Effect of climate policies and action on emissions:</span> The policies a government has implemented or enacted and how these are likely to affect national emission over the time period to 2030, and where possible beyond.</p>
                            <p className="mt-2"> <span className="font-bold">Impact of pledges, targets and NDCs</span>on national emissions over the time period to 2030, and where possible beyond.</p>
                            <p className="mt-2"> <span className="font-bold">Comparability of effort against countries’ fair share and modelled domestic pathways:</span>  Whether a government is doing its “fair share” compared with others towards the global effort to limit warming consistent with the Paris Agreement, and whether its mitigation efforts on its own territory are in line with global least cost pathways.</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section 
                  className="bg-white rounded shadow-md p-4 my-4"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 font-bold text-xl mb-2 md:mb-0">
                            CAT calculates global warming consequence and emissions gaps
                        </div>
                        <div className="md:w-3/4 md:border-l md:pl-4 border-blue-500">
                            <p>The Climate Action Tracker assesses the total global effort of NDCs, pledges and current policies on:</p>
                            <p className="mt-2"> <span className="font-bold">Global warming over the 21st century.  </span>Global emissions pathways consistent with government actions are analyzed and climate consequences projected using the carbon-cycle / climate model MAGICC.</p>
                            <p className="mt-2"> <span className="font-bold">Emissions Gap:</span>The gap in 2030 between the emissions levels needed to limit warming below a 2°C increase above pre-industrial levels (and to bring warming below 1.5°C by 2100) and the emissions that are projected to result from NDCs, pledges and current policies.</p>
                        </div>
                    </div>
                </motion.section>
            </motion.main>
        </div>

        <Footer />
    </motion.div>
  );
}

export default FindMore;
