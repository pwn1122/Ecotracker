import React, { useState } from 'react';


function App() {
  // State for Eco Actions and User Profile
  const [ecoActions, setEcoActions] = useState([]);
  const [newAction, setNewAction] = useState("");
  const [userProfile, setUserProfile] = useState({
    name: "",
    location: "",
    goal: "Reduce Carbon Footprint"
  });
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  // Handle adding new eco action
  const handleAddAction = () => {
    if (newAction.trim()) {
      setEcoActions([...ecoActions, newAction]);
      setNewAction(""); // Clear input after adding
    }
  };

  // Handle user information form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (userProfile.name && userProfile.location) {
      setIsProfileComplete(true);
    }
  };

  return (
    <div className="bg-green-100 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Eco Action Tracker</h1>

        {/* Profile Section */}
        {!isProfileComplete ? (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 fadeInUp">
            <h2 className="text-2xl font-semibold text-green-500">Add Your Information</h2>
            <form onSubmit={handleProfileSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-lg">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Location</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your location"
                  value={userProfile.location}
                  onChange={(e) => setUserProfile({ ...userProfile, location: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Goal</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your eco goal"
                  value={userProfile.goal}
                  onChange={(e) => setUserProfile({ ...userProfile, goal: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg button-hover"
              >
                Add Your Information
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 fadeInUp">
            <h2 className="text-2xl font-semibold text-green-500">Your Eco Profile</h2>
            <div className="mt-4">
              <p className="text-lg"><strong>Name:</strong> {userProfile.name}</p>
              <p className="text-lg"><strong>Location:</strong> {userProfile.location}</p>
              <p className="text-lg"><strong>Goal:</strong> {userProfile.goal}</p>
            </div>
          </div>
        )}

        {/* Eco Actions Tracker Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-500">Track Your Eco Actions</h2>
          <div className="mt-4">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Add an eco action (e.g., planted trees)"
              value={newAction}
              onChange={(e) => setNewAction(e.target.value)}
            />
            <button
              className="mt-2 w-full bg-green-500 text-white p-3 rounded-lg button-hover"
              onClick={handleAddAction}
            >
              Add Action
            </button>
          </div>

          {/* List of Eco Actions */}
          <ul className="mt-4">
            {ecoActions.length > 0 ? (
              ecoActions.map((action, index) => (
                <li key={index} className="bg-green-50 p-3 rounded-lg shadow-sm mb-2 fadeInUp">
                  {action}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No actions added yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;



