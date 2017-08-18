import React from 'react'
import Spread from './Spread'

const typeDictionary

export default class Jam extends React.Component {
  constructor(){
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    const allCards = this.props.cards


  }



  render(){
    return(
      <div>
        <Spread cards={} spread={this.props.spread} />
      </div>
    )
  }
}
