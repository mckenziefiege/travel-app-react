import React, { Component } from 'react'
import DestinationCard from './DestinationCard.js'
import DestinationForm from './DestinationForm.js'
import DestinationShown from './DestinationShown.js'
import FilterDestinations from './FilterDestinations.js'

class DestinationContainer extends Component {
  state = {
    destinations: [],
    destinationShown: {}
  }

  componentDidMount () {
    fetch('http://localhost:3000/destinations')
      .then(resp => resp.json())
      .then(destinations => this.setState({
        destinations: destinations
      }))
  }

  showClickHandler = (obj) => {
    this.setState({
      destinationShown: obj
    })
  }

  deleteHandler = (obj) => {
    let Id = obj.id
    let newArray = this.state.destinations.filter(obj => obj.id !== Id)
    this.setState({
      destinations: [...newArray]
    })
    fetch(`http://localhost:3000/destinations/${Id}`, {
      method: "DELETE"
    })
  }

  submitFormHandler = (event, obj) => {
    event.preventDefault()
    console.log(obj)
    let newArray = [...this.state.destinations, obj]
    this.setState({
      destinations: newArray
    })
    fetch('http://localhost:3000/destinations', {
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "city": obj.city,
        "country": obj.country,
        "image": obj.image,
        "yearvisited": obj.yearvisited
      })
    })
  }

  render () {
    let destinationCards = this.state.destinations.map(destinationObj =>
    <DestinationCard key={destinationObj.id} destinationObj={destinationObj} showClickHandler={this.showClickHandler} deleteHandler={this.deleteHandler}/> )
    return (
      <div>
        <FilterDestinations destinations={this.state.destinations}/>
        <DestinationShown destinationShown={this.state.destinationShown}/>
        <div className="destinationCards"> {destinationCards} </div>
        <DestinationForm submitFormHandler={this.submitFormHandler}/>
      </div>
    );
  }
}

export default DestinationContainer;
