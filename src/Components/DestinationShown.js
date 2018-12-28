import React, { Component } from 'react'

class DestinationShown extends Component {

  render(){
    return (
      <div>
      <h1>{this.props.destinationShown.city !== undefined ? `${this.props.destinationShown.city}, ${this.props.destinationShown.country}` : null}</h1>
      <p>{this.props.destinationShown.city !== undefined ? `Year Visited: ${this.props.destinationShown.yearvisited}` : null }</p>
      <img src={this.props.destinationShown.image} alt="" width="500" />
      </div>
    )
  }

}

export default DestinationShown;
