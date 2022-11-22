import React, { useState } from 'react'
import './App.css';

function App() {
  //     var     setter       current State
  const [result, setResult] = useState("")

  function handleClick(e) {
    var input = e.target.id
    var newResult = ""

    if (input === "DEL") {
      newResult = result.slice(0, -1);
    } else if (input === "AC"){
      newResult = "";
    } else if (input === "="){
      newResult = eval(result);
    } else {
      newResult =result + input;
    }
    setResult(newResult)
  }

  return (
    <>
    <h1>ReactJs - Calculator App</h1>
    <section className="container">
      <input type="text" id="tb" className="output" placeholder="0" value={result} />
      <button id="AC" onClick={handleClick} className="c1">AC</button>
      <button id="DEL" onClick={handleClick} className="c2">DEL</button>
      <button id="/" onClick={handleClick} className="c2">/</button>
      <button id="7" onClick={handleClick} className="d1">7</button>
      <button id="8" onClick={handleClick}className="d1">8</button>
      <button id="9" onClick={handleClick} className="d1">9</button>
      <button id="*" onClick={handleClick} className="d1">*</button>
      <button id="4" onClick={handleClick} className="e1">4</button>
      <button id="5" onClick={handleClick} className="e1">5</button>
      <button id="6" onClick={handleClick} className="e1">6</button>
      <button id="-" onClick={handleClick} className="e1">-</button>
      <button id="1" onClick={handleClick} className="f1">1</button>
      <button id="2" onClick={handleClick} className="f1">2</button>
      <button id="3" onClick={handleClick} className="f1">3</button>
      <button id="+" onClick={handleClick} className="f1">+</button>
      <button id="0" onClick={handleClick} className="g1">0</button>
      <button id="." onClick={handleClick} className="g1">.</button>
      <button id="=" onClick={handleClick}  className="h2">=</button>
    </section>
    </>
  );
} 

export default App;