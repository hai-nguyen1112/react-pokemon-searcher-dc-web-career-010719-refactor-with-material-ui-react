function fetchPokemons() {
  return dispatch => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => dispatch(fetchedPokemons(pokemons)))
  }
}

function fetchedPokemons(pokemons) {
  return {
    type: "POKEMONS_WERE_FETCHED",
    payload: pokemons
  }
}

function changedSearchTerm(text) {
  return {
    type: "SEARCH_TERM_WAS_CHANGED",
    payload: text
  }
}

export {fetchPokemons, changedSearchTerm}
