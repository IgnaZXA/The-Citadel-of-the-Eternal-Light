import React, { useEffect, useState } from 'react'

function App() {
  const [citadelData, setCitadelData] = useState(null);

  // --- fetch data from ./public/citadel.json ---
  const getCitadelData = ( () => {
    const response = fetch("citadel.json")
    response.then((data) => {data.json().then(
      (result) => {setCitadelData(result)}
    )});
  });

  useEffect(() => getCitadelData(), []);

  return (
    <div>
      <h1>Citadel of Eternal Night</h1>
      <p>Construye aquí la interfaz y lógica de la ciudadela.</p>
      <p>{JSON.stringify(citadelData)}</p>
    </div>
  )
}

export default App
