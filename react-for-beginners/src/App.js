import Button from "./Button.js";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const COIN_URL = "https://api.coinpaprika.com/v1/tickers";
    fetch(COIN_URL)
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>코인 리스트 {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>로딩 중...</strong> : <SelectCoins coins={coins} />}
    </div>
  );
}

function SelectCoins({ coins }) {
  const [btc, setBtc] = useState(0);
  const onChange = (e) => {
    const value = e.target.value / 20501.39;
    setBtc(value.toFixed());
  };
  return (
    <div>
      <div>
        <select>
          {coins.map((item, i) => (
            <option key={i}>
              {item.rank} / {item.name} / ({item.symbol}): {item.quotes.USD.price}
            </option>
          ))}
        </select>
      </div>
      <input onChange={onChange} type="text" placeholder="가진 돈을 적어보세요" />
      <input value={btc} type="text" placeholder="BTC" disabled />
    </div>
  );
}

export default App;
