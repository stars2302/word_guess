const LetterGrid = ({secretWord})=>{
  const letterd = secretWord
                  .split('')
                  .map(letter=><span>{letter}</span>);
  
  return (
    <>{letterd}</>
  )
}

export default LetterGrid;