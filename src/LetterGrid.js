import Letter from "./Letter";

const LetterGrid = ({secretWord, guessedLetters})=>{
  const letters = secretWord
                  .split('')
                  .map((letter,idx)=>{
                    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                    return (
                      <Letter key={idx} value={letter} isShown={isShown}/>
                    )
                  });
  
  return (
    <>{letters}</>
  )
}

export default LetterGrid;