import React from 'react'
import Spread from './Spread'
import JamForm from './JamForm'
import JamsAdapter from '../adapters/JamsAdapter'

export default class Jam extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spread: {
        cards: [],
        title: 'Title',
        description: 'Description',
        type: 'Once Upon a Time'
      },
      name: '',
      description: ''
    }
  }

  componentWillReceiveProps(nextProps){
    // TODO make numCards come from props based on type from db
    if (this.props !== nextProps) {
      JamsAdapter.show(1) // this.props.currentUser.id
        .then(json => this.setState({
          jam: json["jam"],
          spread: {
            ...this.state.spread,
            id: json["spread"]["id"],
            title: json["spread"]["title"],
            description: json["spread"]["description"],
            type: json["type"]["name"],
            cards: json["cards"]
          }
        }))

      //   set up  const deck = [...nextProps.deck]
    }
    // NOTE call createSpread after jam is in state if jam does not have a spread
  }

  onChangeJamField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>{console.log(this.state)})
  }

  onChangeSpreadField = (event) => {
    this.setState({
      spread:{
        ...this.state.spread,
        [event.target.name]: event.target.value
      }
    }, ()=>{console.log(this.state)})
  }

  pullCard = (deck) => {
    let cardIndex = Math.floor(Math.random() * deck.length)
    let flipped = (Math.floor(Math.random() * 10) >= 5)
    console.log(flipped)
    return {data: deck.splice(cardIndex, 1)[0], flipped: flipped}
  }

  dealCards = (deck, numCards) => {
    let cardsDealt = [];
    for (let i = 0; i < numCards; i++) {
      cardsDealt[i] = this.pullCard(deck)
    }
    return cardsDealt
  }

  createSpread = (deck) => {
    const numCards = 3
    this.setState({
      spread: {
        ...this.state.spread,
        cards: this.dealCards(deck, numCards)
      }
    },
      () => {console.log(this.state)}
    )
  }

  onSubmitJamForm = (event) => {
    const deck = [...this.props.deck]
    this.createSpread(deck)
  }
  render(){
    // this.dealCards()
    return(
      <div>
        <JamForm onChangeJamField={this.onChangeJamField}
        onChangeSpreadField={this.onChangeSpreadField}
        types={this.props.types}
        />
        <Spread spread={this.state.spread} />
      </div>
    )
  }
}
