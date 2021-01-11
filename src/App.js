import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';

function App() {
  const [coins, updateCoins] = useState([]);
  const [input, updateInput] = useState({ limit: 5, start: 0 });

  useEffect(() => {
    fetchCoins();
  }, []);

  const updateInputValues = (type, value) => {
    updateInput({ ...input, [type]: value });
  };

  const fetchCoins = async () => {
    const { limit, start } = input;
    const data = await API.get(
      'cryptoapi',
      `/coins?limit=${limit}&start=${start}`
    );
    updateCoins(data.coins);
  };

  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>
      {coins.map((coin, index) => (
        <div key={index} className="cyrptocoin">
          <h2>
            {coin.name} - {coin.symbol}
          </h2>
          <h5>${coin.price_usd}</h5>
        </div>
      ))}

      <input
        onChange={e => updateInputValues('limit', e.target.value)}
        placeholder="limit"
      />
      <input
        onChange={e => updateInputValues('start', e.target.value)}
        placeholder="start "
      />

      <button onClick={fetchCoins}>Fetch Coins</button>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
