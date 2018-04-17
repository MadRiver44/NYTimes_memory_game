import React from 'react'
import PropTypes from 'prop-types'

const Card = props => (
  const card = this.props.card
    return <div onClick={e => this.props.removeMatches([e.target.value])}>{card}</div>
  )

export default Card

Card.propTypes = {
  removeMatches: PropTypes.func,
  card: PropTypes.object
}
