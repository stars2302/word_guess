
import Buttons from "./Button";

const ButtonGrid = ({secretWord, guessedLetters,letterGuessed,isShown})=>{
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];

  let buttons = letters.map((letter,idx)=>
    // return <button key={idx}>{letter}</button>
    <Buttons key={idx} value={letter} onClick={letterGuessed}/>
  )

  let className = 'buttons'
  if(!isShown){className+=' hidden'}
  return (
    <div className={className}>{buttons}</div>
  )
}

export default ButtonGrid;