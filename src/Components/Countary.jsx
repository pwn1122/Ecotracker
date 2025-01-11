
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const countriesData = [
    { name: "Afghanistan", coordinates: [33.93911, 67.709953] },
    { name: "Albania", coordinates: [41.153332, 20.168331] },
    { name: "Algeria", coordinates: [28.033886, 1.659626] },
    { name: "Andorra", coordinates: [42.50779, 1.52109] },
    { name: "Angola", coordinates: [-11.202692, 17.873887] },
    { name: "Antigua and Barbuda", coordinates: [17.060816, -61.796428] },
    { name: "Argentina", coordinates: [-38.416097, -63.616672] },
    { name: "Armenia", coordinates: [40.069099, 45.038189] },
    { name: "Australia", coordinates: [-25.274398, 133.775136] },
    { name: "Austria", coordinates: [47.516231, 13.550072] },
    { name: "Azerbaijan", coordinates: [40.143105, 47.576927] },
    { name: "Bahamas", coordinates: [25.03428, -77.39628] },
    { name: "Bahrain", coordinates: [25.930414, 50.637772] },
    { name: "Bangladesh", coordinates: [23.685, 90.3563] },
    { name: "Barbados", coordinates: [13.193887, -59.543198] },
    { name: "Belarus", coordinates: [53.709807, 27.953389] },
    { name: "Belgium", coordinates: [50.8503, 4.3517] },
    { name: "Belize", coordinates: [17.189877, -88.49765] },
    { name: "Benin", coordinates: [9.3075, 2.3158] },
    { name: "Bhutan", coordinates: [27.514162, 90.433601] },
    { name: "Bolivia", coordinates: [-16.290154, -63.588653] },
    { name: "Bosnia and Herzegovina", coordinates: [43.915886, 17.679076] },
    { name: "Botswana", coordinates: [-22.328474, 24.684866] },
    { name: "Brazil", coordinates: [-14.235004, -51.92528] },
    { name: "Brunei", coordinates: [4.535277, 114.727669] },
    { name: "Bulgaria", coordinates: [42.733883, 25.48583] },
    { name: "Burkina Faso", coordinates: [12.238333, -1.561593] },
    { name: "Burundi", coordinates: [-3.373056, 29.918886] },
    { name: "Cabo Verde", coordinates: [16.002082, -24.013197] },
    { name: "Cambodia", coordinates: [12.565679, 104.990963] },
    { name: "Cameroon", coordinates: [3.848, 11.5021] },
    { name: "Canada", coordinates: [56.130366, -106.346771] },
    { name: "Central African Republic", coordinates: [6.611111, 20.939444] },
    { name: "Chad", coordinates: [15.4542, 18.7322] },
    { name: "Chile", coordinates: [-35.675147, -71.542969] },
    { name: "China", coordinates: [35.86166, 104.195397] },
    { name: "Colombia", coordinates: [4.570868, -74.297333] },
    { name: "Comoros", coordinates: [-11.875001, 43.872222] },
    { name: "Congo (Congo-Brazzaville)", coordinates: [-0.228021, 15.827659] },
    { name: "Congo (Democratic Republic)", coordinates: [-4.038333, 21.758664] },
    { name: "Costa Rica", coordinates: [9.748917, -83.753428] },
    { name: "Croatia", coordinates: [45.1, 15.2] },
    { name: "Cuba", coordinates: [21.521757, -77.781167] },
    { name: "Cyprus", coordinates: [35.126413, 33.429859] },
    { name: "Czech Republic", coordinates: [49.817492, 15.472962] },
    { name: "Denmark", coordinates: [56.26392, 9.501785] },
    { name: "Djibouti", coordinates: [11.825138, 42.590275] },
    { name: "Dominica", coordinates: [15.414999, -61.370976] },
    { name: "Dominican Republic", coordinates: [18.735693, -70.162651] },
    { name: "Ecuador", coordinates: [-1.831239, -78.183406] },
    { name: "Egypt", coordinates: [26.820553, 30.802498] },
    { name: "El Salvador", coordinates: [13.794185, -88.89653] },
    { name: "Equatorial Guinea", coordinates: [1.650801, 10.267895] },
    { name: "Eritrea", coordinates: [15.179384, 39.782334] },
    { name: "Estonia", coordinates: [58.595272, 25.013607] },
    { name: "Eswatini", coordinates: [-26.522503, 31.465866] },
    { name: "Ethiopia", coordinates: [9.145, 40.489673] },
    { name: "Fiji", coordinates: [-17.713371, 178.065032] },
    { name: "Finland", coordinates: [61.92411, 25.748151] },
    { name: "France", coordinates: [46.603354, 1.888334] },
    { name: "Gabon", coordinates: [-0.803689, 11.609444] },
    { name: "Gambia", coordinates: [13.443182, -15.310139] },
    { name: "Georgia", coordinates: [42.315407, 43.356892] },
    { name: "Germany", coordinates: [51.165691, 10.451526] },
    { name: "Ghana", coordinates: [7.946527, -1.023194] },
    { name: "Greece", coordinates: [39.074208, 21.824312] },
    { name: "Grenada", coordinates: [12.262776, -61.604171] },
    { name: "Guatemala", coordinates: [13.4789, -90.5085] },
    { name: "Guinea", coordinates: [9.945587, -9.696645] },
    { name: "Guinea-Bissau", coordinates: [11.803749, -15.180413] },
    { name: "Guyana", coordinates: [4.860416, -58.93018] },
    { name: "Haiti", coordinates: [18.971187, -72.285215] },
    { name: "Honduras", coordinates: [13.909444, -83.433333] },
    { name: "Hungary", coordinates: [47.162494, 19.503304] },
    { name: "Iceland", coordinates: [64.963051, -19.020835] },
    { name: "India", coordinates: [20.593684, 78.96288] },
    { name: "Indonesia", coordinates: [-0.789275, 113.921327] },
    { name: "Iran", coordinates: [32.427908, 53.688044] },
    { name: "Iraq", coordinates: [33.223191, 43.679291] },
    { name: "Ireland", coordinates: [53.41291, -8.24389] },
    { name: "Israel", coordinates: [31.046051, 34.851612] },
    { name: "Italy", coordinates: [41.87194, 12.56738] },
    { name: "Jamaica", coordinates: [18.109581, -77.297508] },
    { name: "Japan", coordinates: [36.204824, 138.252924] },
    { name: "Jordan", coordinates: [30.585164, 36.238414] },
    { name: "Kazakhstan", coordinates: [48.019573, 66.923684] },
    { name: "Kenya", coordinates: [-1.2920659, 36.8219462] },
    { name: "Kiribati", coordinates: [-3.370417, -168.734036] },
    { name: "Korea, North", coordinates: [40.339852, 127.510093] },
    { name: "Korea, South", coordinates: [35.907757, 127.766922] },
    { name: "Kuwait", coordinates: [29.3759, 47.9774] },
    { name: "Kyrgyzstan", coordinates: [41.20438, 74.766098] },
    { name: "Laos", coordinates: [19.85627, 102.495496] },
    { name: "Latvia", coordinates: [56.879635, 24.603189] },
    { name: "Lebanon", coordinates: [33.854721, 35.862285] },
    { name: "Lesotho", coordinates: [-29.609988, 28.233608] },
    { name: "Liberia", coordinates: [6.428055, -9.429499] },
    { name: "Libya", coordinates: [26.3351, 17.228331] },
    { name: "Liechtenstein", coordinates: [47.1415, 9.5215] },
    { name: "Lithuania", coordinates: [55.169438, 23.881275] },
    { name: "Luxembourg", coordinates: [49.61166, 6.13] },
    { name: "Madagascar", coordinates: [-18.766947, 46.869106] },
    { name: "Malawi", coordinates: [-13.254308, 34.301525] },
    { name: "Malaysia", coordinates: [4.210484, 101.975766] },
    { name: "Maldives", coordinates: [3.202778, 73.22068] },
    { name: "Mali", coordinates: [17.570692, -3.996166] },
    { name: "Malta", coordinates: [35.9375, 14.3754] },
    { name: "Marshall Islands", coordinates: [7.131474, 171.184478] },
    { name: "Mauritania", coordinates: [21.00789, -10.940835] },
    { name: "Mauritius", coordinates: [-20.348404, 57.552152] },
    { name: "Mexico", coordinates: [23.634501, -102.552784] },
    { name: "Micronesia", coordinates: [7.425554, 150.550812] },
    { name: "Moldova", coordinates: [47.4116, 28.3699] },
    { name: "Monaco", coordinates: [43.7333, 7.4167] },
    { name: "Mongolia", coordinates: [46.8625, 103.8467] },
    { name: "Montenegro", coordinates: [42.708678, 19.37439] },
    { name: "Morocco", coordinates: [31.7917, -7.0926] },
    { name: "Mozambique", coordinates: [-18.665695, 35.529562] },
    { name: "Myanmar (Burma)", coordinates: [21.913965, 95.956223] },
    { name: "Namibia", coordinates: [-22.95764, 18.49041] },
    { name: "Nauru", coordinates: [-0.522778, 166.931503] },
    { name: "Nepal", coordinates: [28.394857, 84.124008] },
    { name: "Netherlands", coordinates: [52.132633, 5.291266] },
    { name: "New Zealand", coordinates: [-40.900557, 174.885971] },
    { name: "Nicaragua", coordinates: [12.865416, -85.207229] },
    { name: "Niger", coordinates: [17.607789, 8.081666] },
    { name: "Nigeria", coordinates: [9.082, 8.6753] },
  { name: "North Macedonia", coordinates: [41.608635, 21.745275] },
  { name: "Norway", coordinates: [60.472, 8.4689] },
  { name: "Norway", coordinates: [60.472, 8.4689] },
  { name: "Oman", coordinates: [21.5126, 55.923255] },
  { name: "Pakistan", coordinates: [30.3753, 69.3451] },
  { name: "Palau", coordinates: [7.51498, 134.58252] },
  { name: "Panama", coordinates: [8.5375, -80.7821] },
  { name: "Papua New Guinea", coordinates: [-6.314993, 143.95555] },
  { name: "Paraguay", coordinates: [-23.442503, -58.443832] },
  { name: "Peru", coordinates: [-9.19, -75.0152] },
  { name: "Philippines", coordinates: [12.8797, 121.774] },
  { name: "Poland", coordinates: [51.919438, 19.145136] },
  { name: "Portugal", coordinates: [39.399872, -8.224454] },
  { name: "Qatar", coordinates: [25.354826, 51.183884] },
  { name: "Romania", coordinates: [45.9432, 24.9668] },
  { name: "Russia", coordinates: [55.7558, 37.6173] },
  { name: "Rwanda", coordinates: [-1.940278, 29.873888] },
  { name: "Saint Kitts and Nevis", coordinates: [17.357822, -62.782998] },
  { name: "Saint Lucia", coordinates: [13.9094, -60.9789] },
  { name: "Saint Vincent and the Grenadines", coordinates: [12.984305, -61.287228] },
  { name: "Samoa", coordinates: [-13.759029, -172.104629] },
  { name: "San Marino", coordinates: [43.9333, 12.45] },
  { name: "Sao Tome and Principe", coordinates: [0.18636, 6.613081] },
  { name: "Saudi Arabia", coordinates: [23.885942, 45.079162] },
  { name: "Senegal", coordinates: [14.692778, -14.008333] },
  { name: "Serbia", coordinates: [44.016521, 21.005859] },
  { name: "Seychelles", coordinates: [-4.679574, 55.491977] },
  { name: "Sierra Leone", coordinates: [8.460555, -11.779889] },
  { name: "Singapore", coordinates: [1.352083, 103.819836] },
  { name: "Slovakia", coordinates: [48.669026, 19.699024] },
  { name: "Slovenia", coordinates: [46.151241, 14.995463] },
  { name: "Solomon Islands", coordinates: [-29.02418, 153.13522] },
  { name: "Somalia", coordinates: [5.152149, 46.199616] },
  { name: "South Africa", coordinates: [-30.559482, 22.937506] },
  { name: "South Korea", coordinates: [35.907757, 127.766922] },
  { name: "South Sudan", coordinates: [6.869028, 30.35095] },
  { name: "Spain", coordinates: [40.463667, -3.74922] },
  { name: "Sri Lanka", coordinates: [7.8731, 80.7718] },
  { name: "Sudan", coordinates: [12.8628, 30.2176] },
  { name: "Suriname", coordinates: [3.919305, -56.027783] },
  { name: "Sweden", coordinates: [60.128161, 18.643501] },
  { name: "Switzerland", coordinates: [46.8182, 8.2275] },
  { name: "Syria", coordinates: [34.802075, 38.996815] },
  { name: "Taiwan", coordinates: [23.69781, 120.960515] },
  { name: "Tajikistan", coordinates: [38.861034, 71.276093] },
  { name: "Tanzania", coordinates: [-6.369028, 34.888822] },
  { name: "Thailand", coordinates: [15.870032, 100.992541] },
  { name: "Timor-Leste", coordinates: [-8.874217, 125.727539] },
  { name: "Togo", coordinates: [8.6195, 0.8248] },
  { name: "Tonga", coordinates: [-21.178986, -175.198242] },
  { name: "Trinidad and Tobago", coordinates: [10.6918, -61.2225] },
  { name: "Tunisia", coordinates: [33.886917, 9.537499] },
  { name: "Turkey", coordinates: [38.963745, 35.243322] },
  { name: "Turkmenistan", coordinates: [38.9697, 59.5563] },
  { name: "Tuvalu", coordinates: [-7.1095, 177.64933] },
  { name: "Uganda", coordinates: [1.373333, 32.290275] },
  { name: "Ukraine", coordinates: [48.379433, 31.16558] },
  { name: "United Arab Emirates", coordinates: [23.424076, 53.847818] },
  { name: "United Kingdom", coordinates: [55.378051, -3.435973] },
  { name: "United States", coordinates: [37.09024, -95.712891] },
  { name: "Uruguay", coordinates: [-32.1657, -58.4438] },
  { name: "Uzbekistan", coordinates: [41.377491, 64.585262] },
  { name: "Vanuatu", coordinates: [-15.376706, 166.959158] },
  { name: "Vatican City", coordinates: [41.902916, 12.453389] },
  { name: "Venezuela", coordinates: [6.42375, -66.58973] },
  { name: "Vietnam", coordinates: [14.058323, 108.277199] },
  { name: "Yemen", coordinates: [15.5527, 48.516388] },
  { name: "Zambia", coordinates: [-13.133897, 27.849332] },
  { name: "Zimbabwe", coordinates: [-19.015438, 29.154857] }
  
  ];
  
export default function Countries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query) {
      // Clear everything if the input is empty
      setSelectedCountry(null);
      setErrorMessage("");
      return;
    }

    // Find the country from the dataset
    const country = countriesData.find(
      (c) => c.name.toLowerCase() === query.toLowerCase()
    );

    if (country) {
      setSelectedCountry(country);
      setErrorMessage("");
    } else {
      setSelectedCountry(null);
      setErrorMessage("Country not found.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Find Your Country</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search countries"
          className="border border-gray-300 rounded p-2 shadow-sm w-64"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Error Message */}
      {errorMessage && searchQuery && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}

      {/* Map */}
      <MapContainer
        center={[20, 0]} // Initial center of the map
        zoom={2}
        style={{ height: "500px", width: "80%" }}
        className="rounded shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Fly to selected country's location */}
        {selectedCountry && <FlyToLocation coordinates={selectedCountry.coordinates} />}

        {/* Highlight only the selected country */}
        {selectedCountry && (
          <Marker position={selectedCountry.coordinates} icon={highlightedIcon}>
            <Popup>
              <strong>{selectedCountry.name}</strong>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

// Component to fly to the selected country's location
function FlyToLocation({ coordinates }) {
  const map = useMap();
  if (coordinates) {
    map.flyTo(coordinates, 5); // Fly to the selected country's location with zoom level 5
  }
  return null;
}

// Define a custom marker icon for the selected country
const highlightedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Custom marker icon URL
  iconSize: [30, 45], // Adjust size
  iconAnchor: [15, 45], // Anchor point for proper placement
  popupAnchor: [0, -40], // Popup position
});
