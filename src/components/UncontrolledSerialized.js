import React, { Component } from 'react'
import serialize from 'form-serialize'

export default class UncontrolledSerialized extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    // Usually, we would pass the final input values to a function that
    // would do something with the data like persist it to a database.
    // Using serialization, we just need to pass that function the
    // serialized form body.
    const form = e.currentTarget
    const body = serialize(form, {hash: true, empty: true})
    console.log(body)
  }

  render() {
    // Let's see when re-renders happen.
    console.log('render!')

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Uncontrolled Inputs + Form Serialization Example</h1>
        <label>
          Name
          <input name="firstName" />
        </label>
        <label>
          Spirit Animal
          <input name="spiritAnimal" />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
