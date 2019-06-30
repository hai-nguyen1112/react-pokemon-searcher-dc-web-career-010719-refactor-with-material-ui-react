import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SpaIcon from '@material-ui/icons/Spa'

const PokemonCard = ({pokemon}) => {
  const [toggle, setToggle] = useState('front')

  const handleToggleImage = () => {
    toggle === 'front'
    ?
    setToggle('back')
    :
    setToggle('front')
  }

  return (
    <Grid item xs={2} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card style={{maxWidth: "150px"}} onMouseOver={handleToggleImage}>
        <CardActionArea>
          <CardMedia
            style={{width: "150px", height: "150px"}}
            image={toggle === 'front' ? pokemon.sprites.front : pokemon.sprites.back}
            title={pokemon.name}
          />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <SpaIcon style={{color: "red"}}/>&nbsp;{pokemon.stats[5].value} HP
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default PokemonCard
