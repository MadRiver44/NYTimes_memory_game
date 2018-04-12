import React, { Component } from 'react'
import Instructions from '../Instructions/Instructions'
import Timer from '../Timer/Timer'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'
import axios from 'axios'

// import Timer from '../Timer/Timer'
import styles from './Game.scss'

// const Game = () => (
//   <div>
//     <h1 className={styles.header}>Welcome to the NY Times Memory Game</h1>
//     <Instructions />
//     <div className={styles.buttonContainer}>
//       <Button>Easy</Button>
//       <Button>Hard</Button>
//     </div>
//   </div>
// )

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      easyButton: '',
      hardButton: '',
      easyCards: [],
      hardCards: [],
      cardTypes: [],
    }
    this.handleEasyCards = this.handleEasyCards.bind(this)
    this.handleHardCards = this.handleHardCards.bind(this)
  }
  componentDidMount() {
    const getData = axios
      .get('https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json')
      .then(response => {
        this.setState({ easyButton: response.data.levels[0].difficulty })
        this.setState({ easyCards: response.data.levels[0].cards })
        this.setState({ hardButton: response.data.levels[1].difficulty })
        this.setState({ hardCards: response.data.levels[1].cards })
      })
      .catch(error => {
        console.log(error)
      })
  }
  handleEasyCards() {
    this.setState({ currentCards: this.state.easyCards })
  }

  handleHardCards() {
    this.setState({ currentCards: this.state.hardCards })
  }
  render() {
    return (
      <div>
        <h1 className={styles.header}>Welcome to the NY Times Memory Game</h1>
        <Instructions />
        <div className={styles.buttonContainer}>
          <Timer />
          <Button difficulty={this.state.easyButton} onClick={this.handleEasyCards} />
          <Button difficulty={this.state.hardButton} onClick={this.handleHardCards} />
        </div>
        <Card cardTypes={this.state.currentCards} />
      </div>
    )
  }
}

export default Game
