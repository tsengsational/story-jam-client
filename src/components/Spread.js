import React from 'react';
// import Card from './Card';
import Board from './Board';
const type = (props) => {
  return props.types.find((type)=>{return props.spread.type.id === type.id})
}
const Spread = (props) => {
  // const cards = props.spread.cards
  // const cardList = cards.map((card) => {return <div><Card card={card} /></div>} )
  if(props.spread){
  return(
    <div>
      <h3>{props.spread.info.title}</h3>
      <h4>{type.name}</h4>
      <p>{props.spread.info.description}</p>
      <div>
        <Board type={type}/>
      </div>
    </div>
  )} else {
    return (
      <div></div>
    )
  }
}

export default Spread
