import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = () => {
    this.props.addPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={event => this.setState({name: event.target.value})}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={event => this.setState({hp: event.target.value})}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={event => this.setState({frontURL: event.target.value})}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={event => this.setState({backURL: event.target.value})}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
