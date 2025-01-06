
// import React, { useState } from 'react';

// // Sample data for challenges
// const challenges = [
//   {
//     id: 1,
//     title: 'Plant a Tree',
//     description: 'Plant a tree in your backyard or a local park.',
//     points: 50,
//   },
//   {
//     id: 2,
//     title: 'Reduce Plastic Use',
//     description: 'Avoid single-use plastics for a week.',
//     points: 30,
//   },
//   {
//     id: 3,
//     title: 'Bike to Work',
//     description: 'Commute to work or school using a bicycle for three days.',
//     points: 40,
//   },
// ];

// const EcoChallenges = () => {
//   const [participatedChallenges, setParticipatedChallenges] = useState([]);

//   const handleParticipate = (id, points) => {
//     if (!participatedChallenges.includes(id)) {
//       // Mark the challenge as participated
//       setParticipatedChallenges([...participatedChallenges, id]);

//       // Show alert with the points for the challenge
//       alert(`You have redeemed ${points} points for this challenge!`);
//     }
//   };

//   return (
//     <div className="p-6 bg-green-50 flex flex-col items-center">
//       <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">Gamified Eco Challenges</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
//         {challenges.map((challenge) => (
//           <div
//             key={challenge.id}
//             className="bg-white shadow-md rounded-lg p-4 border border-green-200 flex flex-col"
//           >
//             <h2 className="text-xl font-semibold text-green-800 text-center">
//               {challenge.title}
//             </h2>
//             <p className="text-gray-600 mt-2 text-center">{challenge.description}</p>
//             <p className="text-green-600 mt-2 font-medium text-center">
//               Points: {challenge.points}
//             </p>
//             <button
//               onClick={() => handleParticipate(challenge.id, challenge.points)}
//               className={`mt-auto px-4 py-2 rounded text-white font-medium ${
//                 participatedChallenges.includes(challenge.id)
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-green-500 hover:bg-green-600'
//               }`}
//               disabled={participatedChallenges.includes(challenge.id)}
//             >
//               {participatedChallenges.includes(challenge.id)
//                 ? 'Participated'
//                 : 'Participate'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EcoChallenges;






import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample data for challenges
const challenges = [
  {
    id: 1,
    title: 'Plant a Tree',
    description: 'Plant a tree in your backyard or a local park.',
    points: 50,
  },
  {
    id: 2,
    title: 'Reduce Plastic Use',
    description: 'Avoid single-use plastics for a week.',
    points: 30,
  },
  {
    id: 3,
    title: 'Bike to Work',
    description: 'Commute to work or school using a bicycle for three days.',
    points: 40,
  },
];

const EcoChallenges = () => {
  const [participatedChallenges, setParticipatedChallenges] = useState([]);

  const handleParticipate = (id, points) => {
    if (!participatedChallenges.includes(id)) {
      // Mark the challenge as participated
      setParticipatedChallenges([...participatedChallenges, id]);

      // Show alert with the points for the challenge
      alert(`You have redeemed ${points} points for this challenge!`);
    }
  };

  return (
    <div className="p-6 bg-green-50 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">Gamified Eco Challenges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
        {challenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            className="bg-white shadow-md rounded-lg p-4 border border-green-200 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-xl font-semibold text-green-800 text-center">
              {challenge.title}
            </h2>
            <p className="text-gray-600 mt-2 text-center">{challenge.description}</p>
            <p className="text-green-600 mt-2 font-medium text-center">
              Points: {challenge.points}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleParticipate(challenge.id, challenge.points)}
              className={`mt-auto px-4 py-2 rounded text-white font-medium ${
                participatedChallenges.includes(challenge.id)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
              disabled={participatedChallenges.includes(challenge.id)}
            >
              {participatedChallenges.includes(challenge.id)
                ? 'Participated'
                : 'Participate'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EcoChallenges;


