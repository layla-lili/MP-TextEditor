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
  const [textState, setTextState] = useState({ textstyle: []});
  const [colorState, setColorState] = useState({ textcolor: colors[0]});
   
  
 
    
  const stylingBoxes = stylings.map((style) => (
    <button
     
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => setTextState(style)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button 
     
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
        
       onClick={() => setColorState(color)}
    
    />
  ));


  return (
    <div className="App">
      <div className="my-3" >{stylingBoxes}</div>
      
      <textarea style={{ color: colorState, fontWeight: textState, fontStyle:textState, textDecorationLine:textState}} /> 
    

      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
