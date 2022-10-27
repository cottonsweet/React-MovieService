import Button from "./Button.js";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("나는 매번 실행 됩니다.");
  useEffect(() => {
    console.log("나는 오직 한번만 실행 됩니다.");
  }, []);
  useEffect(() => {
    console.log("나는 counter 값이 변경될때마다 실행 됩니다.");
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("나는 keyword 값이 변경될때마다 실행 됩니다.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("나는 keyword 값 또는 counter 값이 변경될때마다 실행 됩니다.");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="검색해 !..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>버튼 눌러보세요</button>
    </div>
  );
}

export default App;
