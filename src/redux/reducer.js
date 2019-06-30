import {combineReducers} from 'redux'

const pokemonsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "POKEMONS_WERE_FETCHED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  pokemons: pokemonsReducer
})

export default rootReducer
