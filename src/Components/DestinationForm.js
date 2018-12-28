import React, { Component } from 'react'

class DestinationForm extends Component {
  state = {
    city: "",
    country: "",
    image: "",
    yearvisited: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearForm = () => {
    this.setState({
      city: "",
      country: "",
      image: "",
      yearvisited: ""
    })
  }

  render () {
    return (
      <div>
      <h3>Add a new travel destination!</h3>
      <form onSubmit={(event) => {
        this.props.submitFormHandler(event, this.state)
        this.clearForm()}}>
      City Name: <input type="text" onChange={this.changeHandler} name="city" value={this.state.city} placeholder="city name"/><br />
      Country: <input type="text" onChange={this.changeHandler} name="country" value={this.state.country} placeholder="country name"/><br />
      Image Url: <input type="text" onChange={this.changeHandler} name="image" value={this.state.image} placeholder="image url"/><br />
      Year Visited: <input type="text" onChange={this.changeHandler} name="yearvisited" value={this.state.yearvisited} placeholder="year visited"/><br />
      <input type="submit"/>
      </form>
      </div>
    );
  }


}

export default DestinationForm;
