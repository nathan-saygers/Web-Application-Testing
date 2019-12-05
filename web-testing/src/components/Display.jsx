import React from 'react';

const Display = props => {

  return (
    <div>
      <p>Strikes: {props.strikes}</p>
      <p>Balls: {props.balls}</p>
    </div>
  )
}

export default Display;