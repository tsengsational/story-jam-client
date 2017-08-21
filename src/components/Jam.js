import React from 'react'
import Spread from './Spread'

const typeDictionary = {};

export default class Jam extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spread: {
        cards: [],
        title: '',
        description: '',
        type: 'Once Upon a Time'
      }
    }
  }

  componentWillReceiveProps(nextProps){
    // TODO make numCards come from props based on type from db
    const deck = [...nextProps.deck]
    const numCards = 3
    this.setState({
      spread: {
        ...this.state.spread,
        cards: this.dealCards(deck, numCards)
      }
    },
    () => {console.log(this.state)}
  )
    // console.log(this.dealCards(deck, numCards))
  }

  pullCard = (deck) => {
    let cardIndex = Math.floor(Math.random() * deck.length)
    return deck.splice(cardIndex, 1)[0]
  }

  dealCards = (deck, numCards) => {
    let cardsDealt = [];
    for (let i = 0; i < numCards; i++) {
      cardsDealt[i] = this.pullCard(deck)
    }
    return cardsDealt
  }

  render(){
    // this.dealCards()
    return(
      <div>
        <Spread cards={this.state.cards} spread={this.state.spread} />
      </div>
    )
  }
}
