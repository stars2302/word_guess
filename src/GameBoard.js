import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

const GameBoard = ({secretWord,maxError})=>{
  const [guessedLetters,setGuessedLetters] = useState([]);
  const [errorCount,setErrorCount] = useState(0);
  
  const letterGuessedHandler = (letter)=>{
    let val = letter.toLowerCase();
    // setGuessedLetters([...guessedLetters,val]);
    setGuessedLetters(prev=>[...prev,val]);

    if(secretWord.indexOf(val) === -1){
      setErrorCount(errorCount+1);
    }
  }

  return (
    <>
      <p>남은횟수 : {maxError-errorCount}회</p>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
      <ButtonGrid letterGuessed={letterGuessedHandler} isShown={errorCount < maxError}/>
    </>
  )
}

export default GameBoard;