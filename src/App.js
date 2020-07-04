import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import logo_W3D from './img/W3D_logo_white.png';
import logo_ippon from "./img/companies/ippon_logo.png"
import logo_tilleuls from "./img/companies/les_tilleuls_logo.png"
import logo_ouisncf from "./img/companies/Oui_sncf_logo.png"
import logo_pictime from "./img/companies/pictime_logo.png"
import logo_soat from "./img/companies/soat_logo.png"
import logo_vaduo from "./img/companies/vaduo_logo.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topPage: {
    //background: "linear-gradient(#220CAD 99%, #FFFFFF)",
    boxShadow: '0 2px 5px 2px rgba(0, 0, 0, .9)',
    backgroundColor: "#220CAD",
    color: "white",
    height: 500,
  },
  topPageContent: {
    maxWidth: "80%",
    marginLeft: "20%",
    marginTop: 20,
    textAlign: "left",
  },
  signUpBtn: {
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
    backgroundColor: "#E8E8F7",
  },
  signInBtn: {
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
    color: "#5343BF",
  },
  companiesBox: {
    borderRadius: "20px",
    background: "linear-gradient(145deg, #d6d6d6, #ffffff)",
    boxShadow: "20px 20px 40px #cacaca,-20px 0px 60px #eeeeee",
    height: "100px",
    width: "200px",
    display: "flex",
    margin: "20px",
  },
  companiesLogo: {
    margin: "auto"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.topPage} >
          <Grid xs={6} container spacing={3} className={classes.topPageContent}>
            <Grid item xs={12} >
              <h1>Les développeurs <br /> heureux au travail sont ici</h1>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">
                WeLoveDevs.com est conçu par des développeurs <br />
                pour aider les développeurs à trouver l'entreprise où ils seront heureux
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={logo_W3D} alt="Logo" height="100" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                CDI, freelance, alternance ou stage.
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ maxWidth: 150 }}>
              <Button variant="contained" className={classes.signUpBtn}>
                S'inscrire
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="outlined" className={classes.signInBtn}>
                Se connecter
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: "30px" }}>
          <Grid container className={classes.companiesBox}>
            <Grid item className={classes.companiesLogo}>
              <img src={logo_ippon} height="50" />
            </Grid>
          </Grid>
          <Grid container className={classes.companiesBox}>
            <Grid item className={classes.companiesLogo}>
              <img src={logo_tilleuls} height="60" />
            </Grid>
          </Grid>
          <Grid container className={classes.companiesBox}>
            <Grid item className={classes.companiesLogo}>
              <img src={logo_ouisncf} height="50" />
            </Grid>
          </Grid>
          <Grid container className={classes.companiesBox}>
            <Grid item className={classes.companiesLogo}>
              <img src={logo_pictime} height="80" />
            </Grid>
          </Grid>
          <Grid container className={classes.companiesBox}>
            <Grid item className={classes.companiesLogo}>
              <img src={logo_soat} height="90" />
            </Grid>
          </Grid>
          <Grid container className={classes.companiesBox}>
            <Grid item className={classes.companiesLogo}>
              <img src={logo_vaduo} height="50" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
