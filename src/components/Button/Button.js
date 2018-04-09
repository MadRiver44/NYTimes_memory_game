import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

const Button = props => (
  <div className={styles.container}>
    <button className={styles.button}>{props.children}</button>
  </div>
)

export default Button

Button.propTypes = {
  children: PropTypes.element.isRequired,
}
