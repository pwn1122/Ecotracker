// import React, { useState, useEffect } from 'react';

// const ImpactTracker = () => {
//   const [actions, setActions] = useState([]);
//   const [newAction, setNewAction] = useState({ description: '', impact: '' });
//   const [totalImpact, setTotalImpact] = useState(0);

//   useEffect(() => {
//     const calculateTotalImpact = actions.reduce((total, action) => total + parseFloat(action.impact || 0), 0);
//     setTotalImpact(calculateTotalImpact);
//   }, [actions]);

//   const handleAddAction = () => {
//     if (newAction.description && newAction.impact) {
//       setActions([...actions, newAction]);
//       setNewAction({ description: '', impact: '' });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewAction({ ...newAction, [name]: value });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-4">Eco Action Tracker</h1>
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-3">Add New Action</h2>
//         <input
//           type="text"
//           name="description"
//           placeholder="Action description"
//           value={newAction.description}
//           onChange={handleInputChange}
//           className="w-full p-2 mb-2 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="impact"
//           placeholder="Impact in units"
//           value={newAction.impact}
//           onChange={handleInputChange}
//           className="w-full p-2 mb-2 border border-gray-300 rounded"
//         />
//         <button
//           onClick={handleAddAction}
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//         >
//           Add Action
//         </button>
//       </div>

//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-6">
//         <h2 className="text-xl font-semibold mb-3">Your Actions</h2>
//         {actions.length > 0 ? (
//           <ul>
//             {actions.map((action, index) => (
//               <li key={index} className="border-b py-2">
//                 <span className="font-medium">{action.description}</span>: {action.impact} units
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No actions added yet.</p>
//         )}
//       </div>

//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-6">
//         <h2 className="text-xl font-semibold">Total Impact</h2>
//         <p className="text-2xl font-bold text-green-600">{totalImpact} units</p>
//       </div>
//     </div>
//   );
// };

// export default ImpactTracker;






import React, { useState } from "react";
import { motion } from "framer-motion";


const EcoTracker = () => {
  const [ecoPoints, setEcoPoints] = useState(120);
  const [leaderboard, setLeaderboard] = useState([
    { name: "Alice", points: 150 },
    { name: "Bob", points: 140 },
    { name: "You", points: 120 },
    { name: "Charlie", points: 110 },
  ]);
  const [completedChallenges, setCompletedChallenges] = useState({});

  const challenges = [
    {
      id: 1,
      name: "Walk or bike to work",
      points: 10,
    },
    {
      id: 2,
      name: "Use a reusable bottle",
      points: 5,
    },
  ];

  // Function to complete a challenge
  const completeChallenge = (challenge) => {
    setCompletedChallenges((prev) => {
      const updatedChallenges = { ...prev };
      updatedChallenges[challenge.name] = (updatedChallenges[challenge.name] || 0) + 1;

      // Update eco points after challenge completion
      const newEcoPoints = ecoPoints + challenge.points;
      setEcoPoints(newEcoPoints);

      return updatedChallenges;
    });
  };

  // Function to update the leaderboard points for "You"
  const updateLeaderboard = (newPoints) => {
    const updatedLeaderboard = leaderboard.map((player) =>
      player.name === "You" ? { ...player, points: newPoints } : player
    );
    setLeaderboard(updatedLeaderboard);
  };

  // Handle redeem rewards
  const handleRedeemRewards = () => {
    updateLeaderboard(ecoPoints);
    alert("Your leaderboard points have been updated!");
  };

  return (
    <div className="p-6 bg-green-100 min-h-screen animate-fade">
      <header className="text-center mb-8 animate-slide">
        <h1 className="text-4xl font-bold text-green-700">Eco Tracker</h1>
        <p className="text-lg text-green-600">Track your eco-friendly journey</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Gamified Challenges */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-lg animate-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-green-800">Gamified Challenges</h2>
          <ul className="mt-4 space-y-2">
            {challenges.map((challenge) => (
              <li
                key={challenge.id}
                className="flex items-center justify-between bg-green-50 p-2 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{challenge.name}</p>
                  <p className="text-sm text-green-700">Complete this challenge and win {challenge.points} points!</p>
                </div>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => completeChallenge(challenge)}
                >
                  Complete
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Eco Points */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-lg animate-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-green-800">Eco Points</h2>
          <p className="text-xl text-green-700 mt-4">Points: {ecoPoints}</p>
          <button
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            onClick={handleRedeemRewards}
          >
            Redeem Rewards
          </button>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-lg animate-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-green-800">Leaderboard</h2>
          <ul className="mt-4 space-y-2">
            {leaderboard
              .sort((a, b) => b.points - a.points)
              .map((player, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 rounded-lg ${
                    player.name === "You" ? "bg-green-200" : "bg-green-50"
                  }`}
                >
                  <span>{player.name}</span>
                  <span>{player.points} pts</span>
                </li>
              ))}
          </ul>
        </motion.div>

        {/* Impact Tracker */}
        <motion.div
          className="bg-white shadow-md p-6 rounded-lg animate-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-green-800">Impact Tracker</h2>
          <div className="mt-4">
            {/* Display the completed challenges */}
            <p className="font-semibold text-green-700">Completed Challenges:</p>
            <div
              className="mt-2 space-y-2 overflow-y-auto max-h-64"
              style={{ maxHeight: "200px" }}
            >
              {Object.keys(completedChallenges).length > 0 ? (
                Object.keys(completedChallenges).map((challengeName, index) => (
                  <p key={index} className="text-green-700">
                    {challengeName} - Completed {completedChallenges[challengeName]} time(s)
                  </p>
                ))
              ) : (
                <p className="text-green-700">No challenges completed yet.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcoTracker;

