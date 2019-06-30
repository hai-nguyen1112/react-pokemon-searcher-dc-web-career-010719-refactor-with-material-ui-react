import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import {connect} from 'react-redux'
import {changedSearchTerm} from '../redux/actions'

const PokemonSearch = ({searchTerm, onSearchTermChange}) => {
  return (
    <div style={{marginBottom: "25px", display: "flex", flexDirection: "row", width: "20%", justifyContent: 'flex-start', alignItems: 'center', borderRadius: "5px", marginLeft: "40%", height: "40px", background: "lightpink"}}>
      <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: "10px"}}>
        <SearchIcon style={{color: "white"}}/>
      </div>
      &nbsp;
      &nbsp;
      <InputBase
        style={{color: "white"}}
        placeholder="Search By Name..."
        type="text"
        value={searchTerm}
        onChange={e => onSearchTermChange(e.target.value)}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchTermChange: text => dispatch(changedSearchTerm(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch)
