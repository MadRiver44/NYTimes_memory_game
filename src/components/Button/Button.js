import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

const Button = props => (
  <button className={styles.mainButtons} onClick={props.clickHandler}>
    {props.difficulty.toUpperCase()}
  </button>
)

export default Button

Button.propTypes = {
  clickHandler: PropTypes.func,
  difficulty: PropTypes.string,
}
