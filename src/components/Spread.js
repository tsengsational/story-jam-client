import React from 'react';
import Card from './Card';
import Board from './Board';

const Spread = (props) => {
  const cards = props.spread.cards
  const cardList = cards.map((card) => {return <div><Card card={card} /></div>} )

  return(
    <div>
      <h3>{props.spread.title}</h3>
      <h4>{props.spread.type}</h4>
      <p>{props.spread.description}</p>

      <div>
      {cardList}
      </div>
      <div>
        <Board />
      </div>
    </div>
  )
}

export default Spread
