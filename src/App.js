import './App.css';
import GameBoard from './GameBoard';

function App() {


  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play the game?</p>
      <div>
        <GameBoard secretWord="React" maxError={6}/>
      </div>
    </div>
  );
}

export default App;
