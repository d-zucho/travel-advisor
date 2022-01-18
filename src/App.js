import { getPlacesData } from './api'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

// import API call function

// Material-UI
import { CssBaseline, Grid } from '@material-ui/core'

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  // bounds == 'boundaries' referring to window of map:
  // top right, bottom left, ....

  // get user location to set coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({
          lat: latitude,
          lng: longitude,
        })
      }
    )
  }, [])

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        {/* Grid 1 */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        {/* Grid 2 */}
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
