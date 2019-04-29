import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  onClick = () => {
    this.state.clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true })
  }

  render() {
    const { name, sprites: { front, back }, stats } = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.onClick}>
            <img src={this.state.clicked ? (back + "") : (front + "")}
              alt="oh no!" />
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
