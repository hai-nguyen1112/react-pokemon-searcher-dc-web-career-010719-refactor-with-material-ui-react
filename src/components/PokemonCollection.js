import React from 'react'
import PokemonCard from './PokemonCard'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'

const PokemonCollection = ({pokemons, searchTerm}) => {
  let pokemonCards = pokemons.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase())).map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  return (
      <Grid container spacing={2}>
        {pokemonCards}
      </Grid>
  )
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    searchTerm: state.searchTerm
  }
}


export default connect(mapStateToProps)(PokemonCollection)
