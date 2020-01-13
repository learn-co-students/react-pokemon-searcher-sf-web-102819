import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      searchValue: "",
      filteredPokes: []
    }
  }

  addPokemon = (event) => {

  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(res => this.setState({pokemon: res, filteredPokes: res})
    )
  }

  searchPokemon = (event) => {
      let newPokes = this.state.pokemon.filter(poke => poke.name.includes(event.target.value))
      this.setState({filteredPokes: newPokes})
  }

  addPokemon = (pokeState) => {
    let newPoke = {
        "height": null,
        "weight": null,
        "id": null,
        "name": pokeState.name,
        "abilities": [],
        "moves": [],
        "stats": [
          {
            "value": 80,
            "name": "special-defense"
          },
          {
            "value": 80,
            "name": "special-attack"
          },
          {
            "value": 63,
            "name": "defense"
          },
          {
            "value": 62,
            "name": "attack"
          },
          {
            "value": 60,
            "name": "speed"
          },
          {
            "value": pokeState.hp,
            "name": "hp"
          }
        ],
        "types": [],
        "sprites": {
          "front": pokeState.frontURL,
          "back": pokeState.backURL
        }
      }

      this.setState(previousState => {
        previousState.pokemon.push(newPoke)
        return previousState
      })

  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokes}/>
      </Container>
    )
  }
}

export default PokemonPage
