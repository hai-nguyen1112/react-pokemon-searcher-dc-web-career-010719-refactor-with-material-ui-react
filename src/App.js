import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import {connect} from 'react-redux'
import {fetchPokemons} from './redux/actions'

class App extends React.Component {
  componentDidMount() {
    this.props.onPokemonsFetch()
  }
  
  render() {
    return (
      <div className="App">
        <PokemonIndex />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPokemonsFetch: () => dispatch(fetchPokemons())
  }
}

export default connect(null, mapDispatchToProps)(App)
