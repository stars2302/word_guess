import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

const GameBoard = ({secretWord})=>{
  const [guessedLetters,setGuessedLetters] = useState([]);
  
  const letterGuessedHandler = (letter)=>{
    let val = letter.toLowerCase();
    setGuessedLetters([...guessedLetters,val]);
  }

  return (
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
      <ButtonGrid letterGuessed={letterGuessedHandler}/>
    </>
  )
}

export default GameBoard;