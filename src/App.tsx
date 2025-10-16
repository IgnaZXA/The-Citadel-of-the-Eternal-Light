import React, { useEffect, useState } from 'react';
import Navigator from './components/Navigator';

function App() {
  const [citadelData, setCitadelData] = useState(null);

  // --- fetch data from ./public/citadel.json ---
  const getCitadelData = (async () => {

    const response = await fetch("citadel.json");
    const data = await response.json();
    setCitadelData(data);
  });

  useEffect(() => {
    getCitadelData();
  }, []);


  if (!citadelData) return <div>Loading...</div>

  return (
    <div>
      {/* --- Generate Navigator tabs --- */}
      <Navigator citadelJSON={citadelData} />
    </div>
  )
}

export default App
