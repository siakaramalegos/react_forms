import React, { Component } from 'react'

export default class BasicControlledForm extends Component {
  constructor() {
    super()
    // Initialize the values for our input properties with empty strings
    this.state = {
      firstName: '',
      spiritAnimal: '',
    }
  }

  onChange = (e) => {
    // Handy generic onChange handler that relies on the `name` set
    // on an input to indicate which property in state to update.
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // Usually, we would pass the final input values to a function that
    // would do something with the data like persist it to a database.
    // Using controlled inputs, we just need to pass that function the
    // values from state.
    console.log(this.state)
  }

  render() {
    // Let's see when re-renders happen.
    console.log('render!')

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Controlled Inputs + onChange Handlers Example</h1>
        <label>
          Name
          <input
            name="firstName"
            onChange={this.onChange}
            value={this.state.firstName} />
        </label>
        <label>
          Spirit Animal
          <input
            name="spiritAnimal"
            onChange={this.onChange}
            value={this.state.spiritAnimal} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
