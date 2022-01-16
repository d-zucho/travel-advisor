import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

// Material-UI
import { CssBaseline, Grid } from '@material-ui/core'

const App = () => {
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
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App
