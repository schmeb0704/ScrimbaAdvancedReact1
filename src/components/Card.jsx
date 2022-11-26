import React from 'react'
import PropTypes from "prop-types"

export default function Card(props){
 
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
    border: props.border
  }

  return (
    <div style={styles}></div>
  )
}

Card.propType = {
  cardColor: PropTypes.string
}

Card.defaultProps = {
  cardColor: "blue",
  height: 100,
  width: 200,
  border: "none"
}