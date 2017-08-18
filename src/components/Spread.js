import React from 'react';

export default const Spread = (props) => {
  const cards = props.cards
  return(
    <div>
      <h3>{props.spread.title}</h3>
      <h4>{props.type}</h4>
      <p>{props.spread.description}</p>


    </div>
  )
}
