import React from 'react';
import CardData from './CardData'

export default const Card = (props) => {
  const headerName = props.flipped ? props.card.flipped_name : props.card.name
  const headerDescription = props.flipped ? props.card.flipped_description : props.card.description
  return (
    <div>
      <h3>{headerName}</h3>
      <p>{headerDescription}</p>
    </div>
  )
}
