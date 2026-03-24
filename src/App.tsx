import { useState } from 'react'
import * as Calc from './logic/math.calculation' 
import './App.css'

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const handleCalculate = (operation: string) => {
    try {
      let res: number;
      switch (operation) {
        case '+': res = Calc.add(num1, num2); break;
        case '-': res = Calc.subtract(num1, num2); break;
        case '*': res = Calc.multiply(num1, num2); break;
        case '/': res = Calc.divide(num1, num2); break;
        case '^': res = Calc.power(num1, num2); break;
        default: return;
      }
      setResult(res);
    } catch (e) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>Cloud CI/CD Calculator</h1>
      <div className="input-group">
        <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
        <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      </div>
      <div className="button-group">
        <button onClick={() => handleCalculate('+')}>+</button>
        <button onClick={() => handleCalculate('-')}>-</button>
        <button onClick={() => handleCalculate('*')}>*</button>
        <button onClick={() => handleCalculate('/')}>/</button>
        <button onClick={() => handleCalculate('^')}>^</button>
      </div>
      <div className="result-display">
        <h2>Result: {result}</h2>
      </div>
    </div>
  )
}

export default App