import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      src: "",
    }

  }

  componentDidMount(){
    this.setState({
      src: this.props.poke.sprites.front
    })
  }

  swapSource = () => {
  if (this.props.poke.sprites.front === this.state.src) {
    this.setState({src: this.props.poke.sprites.back})
  }
  else {
    this.setState({src: this.props.poke.sprites.front})
  }

 }

  render() {
    

    return (
      <Card>
        <div onClick={this.swapSource}>
          <div className="image">
            <img src={this.state.src}  alt="hi"/>
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
