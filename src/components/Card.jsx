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

Card.propTypes = {
  cardColor: PropTypes.oneOf(["blue", "red"]).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,

}

Card.defaultProps = {
  cardColor: "blue",
  height: 100,
  width: 200,
  border: "none"
}