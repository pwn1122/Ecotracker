// import React, { useState } from 'react';

// const EcoActionTracker = () => {
//   const [points, setPoints] = useState(0);
//   const [rewards, setRewards] = useState([]);
//   const [actions, setActions] = useState([
//     { id: 1, name: 'Recycle Plastic', points: 10 },
//     { id: 2, name: 'Plant a Tree', points: 50 },
//     { id: 3, name: 'Ride a Bicycle', points: 20 },
//   ]);

//   const [availableRewards, setAvailableRewards] = useState([
//     { id: 1, name: 'Reusable Water Bottle', cost: 100 },
//     { id: 2, name: 'Canvas Tote Bag', cost: 80 },
//     { id: 3, name: 'Eco-Friendly Notebook', cost: 50 },
//   ]);

//   const handleAction = (actionPoints) => {
//     setPoints(points + actionPoints);
//   };

//   const redeemReward = (reward) => {
//     if (points >= reward.cost) {
//       setPoints(points - reward.cost);
//       setRewards([...rewards, reward]);
//       alert(`You redeemed: ${reward.name}`);
//     } else {
//       alert('Not enough points to redeem this reward.');
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 flex justify-center">Eco Points</h1>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Your Points: {points}</h2>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Actions</h2>
//         <ul className="space-y-2">
//           {actions.map((action) => (
//             <li
//               key={action.id}
//               className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
//             >
//               <span>{action.name}</span>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//                 onClick={() => handleAction(action.points)}
//               >
//                 Earn {action.points} Points
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold mb-2">Rewards</h2>
//         <ul className="space-y-2">
//           {availableRewards.map((reward) => (
//             <li
//               key={reward.id}
//               className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
//             >
//               <span>{reward.name} - {reward.cost} Points</span>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                 onClick={() => redeemReward(reward)}
//               >
//                 Redeem
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default EcoActionTracker;







import React, { useState } from 'react';


const EcoActionTracker = () => {
  const [points, setPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [actions, setActions] = useState([
    { id: 1, name: 'Recycle Plastic', points: 10 },
    { id: 2, name: 'Plant a Tree', points: 50 },
    { id: 3, name: 'Ride a Bicycle', points: 20 },
  ]);

  const [availableRewards, setAvailableRewards] = useState([
    { id: 1, name: 'Reusable Water Bottle', cost: 100 },
    { id: 2, name: 'Canvas Tote Bag', cost: 80 },
    { id: 3, name: 'Eco-Friendly Notebook', cost: 50 },
  ]);

  const [actionAnimation, setActionAnimation] = useState('');

  const handleAction = (actionPoints) => {
    setActionAnimation('animate-points');
    setPoints(points + actionPoints);
    setTimeout(() => setActionAnimation(''), 1000); // Reset animation class after 1 second
  };

  const redeemReward = (reward) => {
    if (points >= reward.cost) {
      setPoints(points - reward.cost);
      setRewards([...rewards, reward]);
      alert(`You redeemed: ${reward.name}`);
    } else {
      alert('Not enough points to redeem this reward.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Eco Points</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Your Points: <span className={`points-text ${actionAnimation}`}>{points}</span></h2>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Actions</h2>
        <ul className="space-y-2">
          {actions.map((action) => (
            <li
              key={action.id}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
            >
              <span>{action.name}</span>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => handleAction(action.points)}
              >
                Earn {action.points} Points
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Rewards</h2>
        <ul className="space-y-2">
          {availableRewards.map((reward) => (
            <li
              key={reward.id}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
            >
              <span>{reward.name} - {reward.cost} Points</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => redeemReward(reward)}
              >
                Redeem
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EcoActionTracker;

