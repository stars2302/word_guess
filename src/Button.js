import { useState } from "react";

const Buttons = ({value, onClick})=>{
  const [isClicked,setIsClicked] = useState(false);
  let className = 'button';
  if(isClicked){
    className += ' guessed';
  }

  const clickHandler = ()=>{
    setIsClicked(true);
    onClick(value);
  }

  return (
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}

export default Buttons;