import React from 'react'
import Spread from './Spread'

export default class Jam extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentJam: {},
      currentUser: ""
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        currentJam: nextProps.currentJam,
        currentUser: nextProps.currentUser
      }, ()=>{console.log(this.state)})
    }
  }
  // componentWillReceiveProps(nextProps){
  //   // TODO make numCards come from props based on type from db
  //   if (this.props !== nextProps) {
  //     JamsAdapter.show(1) // this.props.currentUser.id
  //       .then(json => this.setState({
  //         jam: json["jam"],
  //         spread: {
  //           ...this.state.spread,
  //           id: json["spread"]["id"],
  //           title: json["spread"]["title"],
  //           description: json["spread"]["description"],
  //           type: json["type"]["id"],
  //           cards: json["cards"]
  //         }
  //       }))

      //   set up  const deck = [...nextProps.deck]
    // }
    // NOTE call createSpread after jam is in state if jam does not have a spread
  // }

  render(){
    // this.dealCards()

    return(
      <div>
        <Spread spread={this.state.currentJam.spread} types={this.props.types} />
      </div>
    )
  }
}
