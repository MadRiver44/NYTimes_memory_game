import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Cards.scss'
import Card from '../Card/Card'

const Cards = props => {
  const card = (
    <div className={styles.sty}>
      {this.props.cardTypes.length !== 0 ? (
        this.props.cardTypes.map((item, index) => (
          <button className={styles.cardStyle} value={item} id={index} key={item}>
            {item}
          </button>
      )
       : <div>No Cards</div>
})}
    </div>
  )
  return <Card card={card} removeMatches={this.props.removeMatches} />
}


export default Cards

Cards.propTypes = {
  removeMatches: PropTypes.func.isRequired,
}
