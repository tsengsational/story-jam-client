import React from 'react';


const Card = (props) => {
  const headerName = props.card.flipped ? props.card.data.flipped_name : props.card.data.name
  const headerDescription = props.card.flipped ? props.card.data.flipped_description : props.card.data.description
  return (
    <div>
      <h3>{headerName}</h3>
      <p>{headerDescription}</p>
    </div>
  )
}

export default Card
