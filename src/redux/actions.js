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

export {fetchPokemons}
