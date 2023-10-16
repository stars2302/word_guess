import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";

const GameBoard = ({secretWord})=>{
  return (
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={['a','b','r']}/>
      <ButtonGrid/>
    </>
  )
}

export default GameBoard;