import React from 'react'
import styles from './Instructions.scss'

const Instructions = () => (
  <div>
    <div className={styles.instructions}>Instuctions</div>
    <ol className={styles.orderedList}>
      <li>The cards will appear face down</li>
      <li>Select a card</li>
      <li>After first card is selected, try to match it</li>
      <li>If two cards match, they will be removed from the board</li>
      <li>When there are only two cards left, the game is won!</li>
    </ol>
  </div>
)
export default Instructions
