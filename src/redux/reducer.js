import {combineReducers} from 'redux'

const pokemonsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "POKEMONS_WERE_FETCHED":
      return action.payload
    default:
      return oldState
  }
}

const searchTermReducer = (oldState="", action) => {
  switch (action.type) {
    case "SEARCH_TERM_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  searchTerm: searchTermReducer
})

export default rootReducer
