import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

class PokemonIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      allPokemon: [],
      filterPokemon: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        this.setState({ allPokemon: data })
        this.setState({ filterPokemon: data })
      })
  }

  onSearchChange = (e) => {
    console.log(e.target.value)
    let filter = this.state.allPokemon.filter(pp => {
      return pp.name.includes(e.target.value)
    })
    this.setState({ filterPokemon: filter })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.filterPokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }

}


export default PokemonIndex
