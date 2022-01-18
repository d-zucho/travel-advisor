import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  // if larger than 600px, isMobile is set to False

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCyhvb-Hm0GI_h28eGHc0SYIrVy4hd_Gx8' }}
        defaultCenter={{ lat: 37.7749, lng: 122.4194 }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({
            lat: e.center.lat,
            lng: e.center.lng,
          })
          setBounds({
            ne: e.marginBounds.ne,
            sw: e.marginBounds.sw,
          })
        }}
        onChildClick={''}></GoogleMapReact>
    </div>
  )
}

export default Map
