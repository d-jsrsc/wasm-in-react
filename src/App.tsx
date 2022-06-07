import { useState } from "react";
import { add } from "wasm-lib";

function App() {
  const [ans, setAns] = useState(0);
  const addClick = () => {
    setAns(add(1, 1));
  };

  return (
    <div className="App">
      <div>{ans}</div>
      <button onClick={addClick}>click</button>
    </div>
  );
}

export default App;
