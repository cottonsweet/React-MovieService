import Button from "./Button.js";
import styled from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styled.title}>리엑트 ㅎㅇ ㅋ</h1>
      <Button text={"버튼을 눌러라 !!!"} />
    </div>
  );
}

export default App;
