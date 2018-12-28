import React, { Component } from 'react'

class DestinationCard extends Component {

  render () {
    return (
      <div className="destinationcard">
        <h1>{this.props.destinationObj.city}</h1>
        <button onClick={() => this.props.showClickHandler(this.props.destinationObj)}>Show</button>
        <button onClick={() => this.props.deleteHandler(this.props.destinationObj)}>Delete</button>
      </div>
    );
  }

}

export default DestinationCard;
