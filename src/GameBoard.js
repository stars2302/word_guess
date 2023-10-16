import LetterGrid from "./LetterGrid";

const GameBoard = ({secretWord})=>{
  return (
    <>
      <LetterGrid secretWord={secretWord}/>
    </>
  )
}

export default GameBoard;