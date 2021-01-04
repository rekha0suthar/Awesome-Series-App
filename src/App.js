import React from 'react';
import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';


const favSeries = "amazon";

function App() {
  return (
    <div>
      <h1 className="heading_style"> List of Top 5 Awesome Series </h1>
      { favSeries === "netflix" ? <Netflix /> : <AmazonPrime />}
    </div>
  );
}

export default App;
