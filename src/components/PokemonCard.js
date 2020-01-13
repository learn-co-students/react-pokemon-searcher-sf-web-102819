import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    constructor(){
      super()
      this.state = {
        imageToggle: false
      }
    }

    handleClick = (event) => {
      let newState = !this.state.imageToggle
      this.setState({imageToggle: newState}) 
    }
    
  
  render() {
    
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img src={this.state.imageToggle == false ? this.props.pokemonInfo.sprites.front: this.props.pokemonInfo.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
  <div className="header">{this.props.pokemonInfo.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonInfo.stats[this.props.pokemonInfo.stats.length-1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
