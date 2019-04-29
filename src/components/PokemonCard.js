import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flipped: false
    }
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  render() {
    const {name, stats, sprites} = this.props.pokemon

    return (
      <Card>
        <div onClick={this.flipCard} >
          <div className="image">
            <img src={this.state.flipped ? sprites.back : sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(o => o.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
