import React, { useState } from 'react';
import './Calculation.css'; // Import the CSS file

// ... (rest of the code remains the same) ...


function Calculation() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [options, setOptions] = useState([
    "Addition",
    "Subtraction",
    "Multiplication",
    "Division"
  ]);
  const [selectOption, setSelectOption] = useState("");

  const validation = (input) => {
    const regex = /^[0-9]+$/;
    if (input.match(regex)) {
      return input;
    } else {
      console.log('error');
      return "";
    }
  };

  const handleClick = () => {
    if (selectOption === "Addition") {
      setResult(Number(input1) + Number(input2));
    } else if (selectOption === "Subtraction") {
      setResult(Number(input1) - Number(input2));
    } else if (selectOption === "Multiplication") {
      setResult(Number(input1) * Number(input2));
    } else if (selectOption === "Division") {
      setResult(Number(input1) / Number(input2));
    }
  };

  return (
    <>
      <div>
        <h1>Calculating Two Numbers</h1>

        <select onChange={(e) => setSelectOption(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <form>
          <input type="number" value={input1} onChange={(e) => setInput1(validation(e.target.value))} />
          <input type="number" value={input2} onChange={(e) => setInput2(validation(e.target.value))} />
        </form>

        <button onClick={handleClick}>Calculate</button>

        <h3>{result}</h3>
      </div>
    </>
  );
}

export default Calculation;
