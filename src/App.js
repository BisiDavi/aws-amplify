import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';

function App() {
  const [coins, updateCoins] = useState([]);
  const fetchCoins = async () => {
    const data = await API.get('cryptoapi', '/coins');
    updateCoins(data.coins);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>
      {coins.map((coin, index) => (
        <div key={index} class="cyrptocoin">
          <h2>
            {coin.name} - {coin.symbol}
          </h2>
          <h5>${coin.price_usd}</h5>
        </div>
      ))}
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
