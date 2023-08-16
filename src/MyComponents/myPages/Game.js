import "./Pages.css";
import React, { useState } from "react"; 
import img1 from '../imgs/1.png';
import img2 from '../imgs/2.png';
import img3 from '../imgs/3.png';
import img4 from '../imgs/4.png';
import img5 from '../imgs/5.png';
import img6 from '../imgs/6.png';

function Game() {
  const [imageSrc, setImageSrc] = useState(img1);
  const [diceValue, setDiceValue] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setscore] = useState(0);
  const [ruleDisplay, setDisplay] = useState('none');

  // All Logics Are Below

  // Num Picker Will Get Number from Nums on Navbar
  const numPicker = (num) => {
    // Checking its Working or Not
    console.log('Num is Working ' + num)
    if (num === null) {
      alert("Please select a number first.");
    } else {
      setSelectedNumber(num);
    }

  };

  // DicRoll Will Generate Random Number and Change Picture accordingly and Announce Winner

  const diceRoll = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    if (selectedNumber === null) {
      alert("Please select a number before rolling the dice.");
      return;
    }
    // Checking its Working or Not
    console.log("Checking Diceroll " + randomValue)

    setDiceValue(randomValue);

    if (randomValue === selectedNumber) {
      alert('Congratulations! You matched the dice value.');
      setscore(score + 5)
    }
    if (randomValue === 1) {
      setImageSrc(img1)
    }
    if (randomValue === 2) {
      setImageSrc(img2)
    }
    if (randomValue === 3) {
      setImageSrc(img3)
    }
    if (randomValue === 4) {
      setImageSrc(img4)
    }
    if (randomValue === 5) {
      setImageSrc(img5)
    }
    if (randomValue === 6) {
      setImageSrc(img6)
    }

  };


  const reset = () => {
    setscore(0)
  }

  const showRules =() =>{
    setDisplay("block")
   console.log('Working')
   console.log(setDisplay)
  }
  const hide =() =>{
    setDisplay("none")
  }



  return (
    <div className="game">
      <nav>
        <div className="left-nav">
          <h2 id="score">{score}</h2>
          <p>Total Score</p>
        </div>
        <div className="right-nav">
          <ul>
            <p className="num_p" onClick={() => numPicker(1)}>1</p>
            <p className="num_p" onClick={() => numPicker(2)}>2</p>
            <p className="num_p" onClick={() => numPicker(3)}>3</p>
            <p className="num_p" onClick={() => numPicker(4)}>4</p>
            <p className="num_p" onClick={() => numPicker(5)}>5</p>
            <p className="num_p" onClick={() => numPicker(6)}>6</p>
          </ul>
          <p>Select Number</p>
        </div>
      </nav>
      {/* I Tried To Use Components but Some Js not working  */}
      <div className='main'>
        <img src={imageSrc} onClick={diceRoll} alt="Dice"></img>
        <h2>Click On Dice To Roll</h2>
        <button className='reset' id="reset" onClick={reset}>Reset Score</button>
        <button className='rules' onClick={showRules}>Show Rules</button>
        <div id="Rules-box" className="Rules-box">

          <div className='Rules-main' style={{ display: ruleDisplay }}>
            <h2>How to Play Dice Game</h2>
            <p className='points'>Select Any Number</p>
            <p className='points'>Clck On Dice Image</p>
            <p className='points'>after Select if You Got Match Dice and Selected Number You Will Get 5 Points</p>
            <button onClick={hide}>Hide Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;