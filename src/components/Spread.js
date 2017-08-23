import React from 'react';
import Board from './Board';

const Spread = (props) => {

  if(props.spread){
    const type = props.types.find((type)=>{return props.spread.type.id === type.type.id})
  return(
    <div>
      <h3>{props.spread.info.title}</h3>
      <h4>{type.type.name}</h4>
      <p>{props.spread.info.description}</p>
      <div>
        <Board type={type} board={props.spread.board}/>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Spread
