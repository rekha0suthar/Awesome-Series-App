import React from 'react';
import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';


// const favSeries = "netflix";

function App() {
    return (
        <div>
            <h1 className="heading_style"> List of Top 5 Awesome Series </h1>
            {/* <button onClick={AmazonPrime}>AmazonPrime</button>
            <button>Netflix</button> */}

             <Netflix /> 
             <AmazonPrime />
        </div>
    );
}

export default App;
