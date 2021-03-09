import Container from'@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
      <Grid item xs={6} sm={3}>
          <Paper >xs=6 sm=3</Paper>
        </Grid>

        <Grid item xs={6} sm={9}>
          <Paper >Component</Paper>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
