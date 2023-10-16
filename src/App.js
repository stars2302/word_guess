import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import WordSelect from './WordSelect';

function App() {
  const [secretWord,setSecretWord] = useState('');


  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play the game?</p>
      <div>
        {secretWord ? 
        <GameBoard secretWord={secretWord} maxError={6}/>:
        <WordSelect setSecretWord={setSecretWord} wordSelected={val=>setSecretWord(val)}/>}
      </div>
    </div>
  );
}

export default App;
