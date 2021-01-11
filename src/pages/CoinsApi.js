import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const CoinsApi = () => {
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
      `/coins?limit=${limit}&$start=${start}`
    );
    updateCoins(data.coins);
  };

  const displayCoins = coins => {
    return coins.map((coin, index) => (
      <div key={index} className="cryptocoin">
        <h2>
          {coin.name} - {coin.symbol}
        </h2>
        <h5>${coin.price_usd}</h5>
      </div>
    ));
  };

  const getMoreCoinsForm = () => {
    return (
      <div className="moreCoinsForm">
        <input
          onChange={e => updateInputValues('start', e.target.value)}
          placeholder="Start"
        />
        <input
          onChange={e => updateInputValues('limit', e.target.value)}
          placeholder="Limit"
        />
        <button onClick={fetchCoins}>Fetch Coins</button>
      </div>
    );
  };

  return (
    <div className="CoinsApi">
      <h1>Reading Crypto data from Coinlore API</h1>
      {displayCoins(coins)}
      {getMoreCoinsForm()}
    </div>
  );
};

export default CoinsApi;
