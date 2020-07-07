import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { TopPage } from './components/TopPage';
import { DisplayCompanies } from './components/Companies';
import { Stories } from './components/Stories';
import { Features } from './components/Features';
import { Footer } from './components/Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <TopPage />
        <DisplayCompanies />
        <Stories />
        <Features />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
