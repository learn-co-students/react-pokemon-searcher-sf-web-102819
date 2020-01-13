import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* {console.log(this.props.pokemonData)} */}
        
        {this.props.pokemonData.map(pokemon => <PokemonCard pokemonInfo={pokemon}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
