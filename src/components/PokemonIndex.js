import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [ ],
      searchTerm: ""

    }
  }

  componentDidMount(){

    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(json => this.setState({allPokemon: json}))
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemonData={this.state.allPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
