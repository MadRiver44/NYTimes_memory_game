import React, { Component } from 'react'
import Cards from '../Cards/Cards'
// import PropTypes from 'prop-types'
import styles from './Button.scss'

// const Button = props => (
//   <div className={styles.container}>
//     <button className={styles.button}>{props.children}</button>
//   </div>
// )

// removed this. from props
const Button = props => (
  <div className={styles.container}>
    <button className={styles.button} onClick={props.onClick}>
      {props.diffculty}
    </button>
  </div>
)

export default Button

// validate props difficulty and onClick
