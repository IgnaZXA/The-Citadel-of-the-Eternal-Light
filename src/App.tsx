import React, { useEffect, useState } from 'react';
import Navigator from './components/Navigator';

function App() {
  const [citadelData, setCitadelData] = useState(null);

  // --- fetch data from ./public/citadel.json ---
  const getCitadelData = ( () => {
    const response = fetch("citadel.json"); 
    response.then((data) => {data.json().then(
      (result) => {setCitadelData(result)}
    )});
  });

  useEffect(() => getCitadelData(), []);

  return (
    <div>
      {/* --- Generate Navigator tabs --- */}
      <Navigator />
    </div>
  )
}

export default App
