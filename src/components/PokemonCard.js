import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: ""
    };
  }

  componentDidMount(){
    this.setState({
      src: this.props.pokemon.sprites.front
    });
  }

  handleCardFlip = () => {
    if (this.state.src === this.props.pokemon.sprites.front) {
      this.setState({ src: this.props.pokemon.sprites.back });
    } else if (this.state.src === this.props.pokemon.sprites.back) {
      this.setState({ src: this.props.pokemon.sprites.front });
    }
  };

  
  render() {
    return (
      <Card>
      <div>
        <div onClick={this.handleCardFlip} className="image">
          <img src={this.state.src} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(el => el.name = 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
