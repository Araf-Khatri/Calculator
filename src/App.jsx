import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "clear") {
      setCalValue("");
    } else if (buttonText === "backspace") {
      setCalValue((prevValue) => {
        return prevValue.slice(0, prevValue.length - 1) || ""
      });
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result.toString());
    } else {
      const newDiplayvalue = calValue + buttonText;
      setCalValue(newDiplayvalue);
    }
  };
  return (
    <>
      <div className="main-container">
        <Display value={calValue} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
