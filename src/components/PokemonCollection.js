import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  onSearch = () => {

  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(poke => (
          <PokemonCard poke={poke} key={poke.name}/>
        ))}
      </Card.Group>
    )
  }
}

export default PokemonCollection
