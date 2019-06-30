import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import PokemonSearch from './PokemonSearch'

class PokemonPage extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Pokemon Searcher</h1>
        <PokemonSearch />
        <PokemonCollection />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
