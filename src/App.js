import React, { useState } from 'react'
import './App.css';

function App() {
  const [myGuess,setMyGuess] = useState(0);
  const [rndNumber, setRndNumber] = useState(0);
  const [history,setHistory] = useState('');
  return (
    <div className="App">     
        <h1>1.2.3.</h1>
      <div>
        <input type="text"
        placeholder="enter your guess ?"
        onChange = {(e) => {setMyGuess(e.target.value)}}
        value = {myGuess}/>
        <div>
          <button>check my guess</button>
          <button>restart</button>
        </div>


      </div>
    </div>
  );
}

export default App;
