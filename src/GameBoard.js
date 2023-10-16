import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";

const GameBoard = ({secretWord})=>{
  const letterGuessedHandler = (letter)=>{

  }
  
  return (
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={['a','b','r']}/>
      <ButtonGrid letterGuessed={letterGuessedHandler}/>
    </>
  )
}

export default GameBoard;