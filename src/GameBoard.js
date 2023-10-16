import LetterGrid from "./LetterGrid";

const GameBoard = ({secretWord})=>{
  return (
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={['a','b','r']}/>
    </>
  )
}

export default GameBoard;