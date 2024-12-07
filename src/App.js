
import './App.css';
import { Container, Grid2,  } from '@mui/material';
import TourCard from './component/TourCard';

function App() {
  return (
    <Container> 
      <Grid2 container spacing={5}>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      </Grid2>
    </Container>
  );
}

export default App;
