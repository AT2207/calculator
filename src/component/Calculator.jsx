import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const Calculator = () => {
  const [input, setInput] = useState("")

  const handleClick = (val) => {
    console.log(val)     
     if (["+", "-", "*", "/","."].includes(val) && ["+", "-", "*", "/","."].includes(input.slice(-1))) {
      setInput((prev) => prev.slice(0, -1) + val); 
      return 
      }      
    setInput((prev) => prev + val)    
  }

  const handleCalculate = () => {
      setInput(eval(input))
  }

  const handleClear = () => {
    setInput("");
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td colSpan="3">
              <input type="text" value={input} readOnly />
            </td>
            <td>
              <input type="button" value="C" onClick={handleClear} />
            </td>
          </tr>
          {[["1", "2", "3", "/"], ["4", "5", "6", "*"], ["7", "8", "9", "-"], ["0", ".", "=", "+"]].map((item, index) => (
            <tr key={index}>
            {item.map((val) => (
                <td key={val}>
                  <input type="button" value={val} onClick={() => (val == "=" ? handleCalculate() : handleClick(val))}/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

////Commented by madam

export default Calculator;
