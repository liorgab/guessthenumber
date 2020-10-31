import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [myGuess,setMyGuess] = useState(0);
  const [rndNumber, setRndNumber] = useState(0);
  const [attempts,setAttempts] = useState(1);
  const [newHistory, setNewHistory] = useState([])
  const resetHandeler = () => {
    setNewHistory([]);
    setAttempts(0);      
  }
  const checkGuess = ()=>{
    setMyGuess('')

    if (parseInt(myGuess, 10)===rndNumber) {
      setNewHistory([...newHistory,'this is the number in '+attempts+" attempts"])
    } else {
      
      if (myGuess>rndNumber) {
        setAttempts(attempts+1);
        setNewHistory([...newHistory,attempts+'.your guess is greater'])
      } else {
        setAttempts(attempts+1);
        setNewHistory([...newHistory,attempts+'.your guess is Smaller'])
      }
    }
  }
  useEffect(() => {
    setRndNumber((Math.floor(Math.random()*100+1)));
  }, [attempts])
  return (
    <div className="App">     
        <h1>1.2.3.</h1>
      <div>
        <input type="text"
        placeholder="enter your guess ?"
        onChange = {(e) => {setMyGuess(e.target.value)}}
        value = {myGuess}/>
        <div>
          <button
            onClick={checkGuess}
          >check my guess</button>
          <button
            onClick={ resetHandeler }
            
          >Reset</button>
        </div>
        {newHistory.map((item,i)=>(<div key={i}>{item}</div>))}
        <div>{rndNumber}</div>



      </div>
    </div>
  );
}

export default App;
