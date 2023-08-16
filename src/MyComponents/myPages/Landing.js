import React from 'react'
import './Pages.css';
import mainimg from '../imgs/dice-maii.png'
import {Link } from "react-router-dom";
import Game from './Game';

function Landing() {

  return (
    <div className='home-page'>
        <div className='Left'>
            <img src={mainimg}/>
        </div>
        <div className='Right'>
            <h1>DICE GAME</h1>
            <Link to="/game" className='btn'>
        <button>Play Game</button> 
      </Link>
        </div>
    </div>

  )
}

export default Landing