import Letter from "./Letter";

const LetterGrid = ({secretWord, guessedLetters})=>{
  const letterd = secretWord
                  .split('')
                  .map(letter=>{
                    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                    return (
                      <Letter value={letter} isShown={isShown}/>
                    )
                  });
  
  return (
    <>{letterd}</>
  )
}

export default LetterGrid;