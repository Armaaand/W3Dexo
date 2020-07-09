import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { TopPage } from './components/TopPage';
import { DisplayCompanies } from './components/Companies';
import Features from './components/features';
import { Footer } from './components/Footer';
import Testimonials from './components/testimonials';


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
        <Testimonials />
        <Features />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
