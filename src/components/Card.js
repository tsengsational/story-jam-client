import React from 'react';


const Card = (props) => {
    if (props.card){
    const headerName = props.card.flipped ? props.card.data.flipped_name : props.card.data.name
    const headerDescription = props.card.flipped ? props.card.data.flipped_description : props.card.data.description
    return (
      <div>
      <h3>{headerName}</h3>
      <p>{headerDescription}</p>
      </div>
    )
  } else if (props.card == null) {
    return(
      <div></div>
    )
  }
}

export default Card
