import Card from './components/Card.js'
import Grid from '@mui/material/Grid';
import Item from "@mui/material/ListItem";
function App() {
  return (
    <>
    <Grid container spacing={3} alignItems="center">
  
  <Grid item spacing={12} alignItems="center">
    <Item alignItems="center"><Card/></Item>
  </Grid>
</Grid>
    
    </>
  );
}

export default App;
