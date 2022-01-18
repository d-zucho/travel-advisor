import { useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
//? Material-UI
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Card,
} from '@material-ui/core'
import useStyles from './styles'

const List = () => {
  const classes = useStyles()

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const places = [
    { name: 'Cool Place' },
    { name: 'Outdoor Movies' },
    { name: 'Mini Golf' },
    { name: 'Cool Place' },
    { name: 'Outdoor Movies' },
    { name: 'Mini Golf' },
    { name: 'Cool Place' },
    { name: 'Outdoor Movies' },
    { name: 'Mini Golf' },
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Restaurants, Hotels & Attractions around you
      </Typography>
      {/*! -- START Menu Options --   */}
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        {/* ** User select menu for search category  */}
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {/* ** Since this data needs to be modified, we need a state to save it */}
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        {/* ** User select menu for search category  */}
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          {/* ** Since this data needs to be modified, we need a state to save it */}
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      {/* -- END Menu Options -- */}

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>

      <h1>List</h1>
    </div>
  )
}

export default List
