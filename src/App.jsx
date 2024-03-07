/* eslint-disable no-unused-vars */
import { Container, Grid, Typography } from '@mui/material';
import Form from './components/Form';
import { NewsProvider } from './context/NewsProvider';
import List from './components/List';

function App() {
  
  return (
 
    <NewsProvider>
      
      <Container>
          <header>
            <Typography align="center" marginY={10} variant="h3">
              News
            </Typography>
          </header>
     
          <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
                <Grid item xs={12} md={6}>
                  <Form />
                </Grid>
          </Grid>
          
          <List />
        
      </Container>
    </NewsProvider>
   
  )
}

export default App
