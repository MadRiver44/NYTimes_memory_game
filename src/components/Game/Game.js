import React from 'react'
import Instructions from '../Instructions/Instructions'
import Button from '../Button/Button'

// import Timer from '../Timer/Timer'
import styles from './Game.scss'

const Game = () => (
  <div>
    <h1 className={styles.header}>Welcome to the NY Times Memory Game</h1>
    <Instructions />
    <div className={styles.buttonContainer}>
      <Button>Easy</Button>
      <Button>Hard</Button>
    </div>
  </div>
)

export default Game
