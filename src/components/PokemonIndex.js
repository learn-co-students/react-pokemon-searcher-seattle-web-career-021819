import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      allPokemon: [],
      displayedPokemon: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setState({
      allPokemon: data,
      displayedPokemon: data
    }))
  }

  search = (ev) => {
    let newPokemon = this.state.allPokemon.filter(pokemon => {
      return pokemon.name.includes(ev.target.value);
    })
    this.setState({ displayedPokemon: newPokemon })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.search} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.displayedPokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
