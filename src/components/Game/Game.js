import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Instructions from '../Instructions/Instructions'
import Timer from '../Timer/Timer'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'
import styles from './Game.scss'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      easyButton: '',
      hardButton: '',
      easyCards: [],
      hardCards: [],
      cardTypes: [],
      currentCards: [],
      itemsArray: [],
    }
    this.handleEasyCards = this.handleEasyCards.bind(this)
    this.handleHardCards = this.handleHardCards.bind(this)
    this.removeMatches = this.removeMatches.bind(this)
  }

  componentDidMount() {
    axios
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
    this.setState({ currentCards: this.state.easyCards, isCountingTime: true })
  }

  handleHardCards() {
    this.setState({ currentCards: this.state.hardCards, isCountingTime: true })
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  removeMatches(items) {
    if (items.length === 1) {
      this.setState({ itemsArray: [...items] })
    }
    if (items[0] === this.state.itemsArray[0]) {
      this.setState(prevState => ({
        currentCards: prevState.currentCards.filter(card => items.indexOf(card) === -1),
      }))
    } // else
  }

  render() {
    return (
      <div style={styles.boardContainer}>
        {this.state.isCountingTime && <Timer />}
        <h1 className={styles.header}>Welcome to the NY Times Memory Game</h1>
        <Instructions />
        <div className={styles.buttonContainer}>
          <Button difficulty={this.state.easyButton} clickHandler={this.handleEasyCards} />
          <Button difficulty={this.state.hardButton} clickHandler={this.handleHardCards} />
        </div>
        <Cards cardTypes={this.state.currentCards} removeMatches={this.removeMatches} />
      </div>
    )
  }
}

export default Game

Game.PropTypes = {
  removeMatches: PropTypes.func,
}
