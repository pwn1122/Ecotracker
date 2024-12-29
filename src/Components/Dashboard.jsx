import React , { useEffect, useState } from 'react'

function Dashboard() {
  const api_key = '4aec3731eaa36c81c257c4f1103248ff'
  const [city, setCity] = useState('');
            const [weather, setWeather] = useState(null);
            const [loading, setLoading] = useState(false);
            const [error, setError] = useState(null);

            const fetchWeather = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    const data = await response.json();
                    setWeather(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            const handleSubmit = (e) => {
                e.preventDefault();
                fetchWeather();
            };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h1 className="text-2xl font-bold mb-4 text-center">Weather App</h1>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter city"
                                className="w-full p-2 border border-gray-300 rounded mb-2"
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Get Weather</button>
                        </form>
                        {loading && <p className="text-center">Loading...</p>}
                        {error && <p className="text-center text-red-500">{error}</p>}
                        {weather && (
                            <div className="text-center">
                                <h2 className="text-xl font-bold">{weather.name}, {weather.sys.country}</h2>
                                <p className="text-lg">{weather.weather[0].description}</p>
                                <p className="text-2xl font-bold">{weather.main.temp}°C</p>
                                <div className="flex justify-center mt-4">
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
                                </div>
                                <div className="mt-4">
                                    <p>Humidity: {weather.main.humidity}%</p>
                                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
  )
}

export default Dashboard
