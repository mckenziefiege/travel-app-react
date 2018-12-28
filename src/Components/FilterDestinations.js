import React, { Component } from 'react'

class FilterDestinations extends Component {

  render(){
    let countries = []
    this.props.destinations.forEach(destination => countries.push(destination.country))
    console.log(countries)
    return(
      <div>
      <h4>Filter by Country:</h4>
      <select>

      </select>
      </div>
    )
  }
}

export default FilterDestinations
