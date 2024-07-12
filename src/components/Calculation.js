import React from 'react';
import { useState } from 'react';

export default function Calculation() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    setSum(Number(firstNumber) + Number(secondNumber));
  }

  return (
    <>
    <p>Syötä ensimmäinen numero:</p>
    <input type='number' value={firstNumber} onChange={(event) => setFirstNumber(event.target.value)} />
    <p>Syötä toinen numero:</p>
    <input type='number' value={secondNumber} onChange={(event) => setSecondNumber(event.target.value)} />
    <button 
      style={{ marginTop: '30px', marginBottom: '30px'}} 
      onClick={() => calculateSum()}
    >
      Laske
    </button>
    <p>Summa on: {sum}</p>
    </>
  )
}
