import { useState } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [textState, setTextState] = useState(stylings);
  const [colorState, setColorState] = useState(colors);

  const handleTextChange = (event) => {
    setTextState({ value: event.target.value });
    console.log(event.target.value);
  };
  const handleColorChange = (event) => {
    setColorState({ value: event.target.value });
  };

  const stylingBoxes = stylings.map((style) => (
    <button
      onClick={() => handleTextChange}
      className="btn btn-light"
      style={styles[style]}
      key={style}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      onClick={() => handleColorChange}
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>

      <textarea />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
