import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import "aos/dist/aos.css";
import './topPage.scss'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo_W3D from '../../img/W3D_logo_white.png';


const useStyles = makeStyles((theme) => ({
    topPage: {
        background: "linear-gradient(100deg, #220CAD, #140767)",
        boxShadow: '0 2px 5px 2px rgba(0, 0, 0, .9)',
        //backgroundColor: "#220CAD",
        color: "#fff",
        height: 500,
        fontFamily: "'Open Sans',sans-serif"

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
        "&:hover": {
            boxShadow: '0 6px 7px 5px rgba(0, 0, 0, .5)',
        }
    },
    signInBtn: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .5)',
        color: "#fff",
        "&:hover": {
            boxShadow: '0 6px 7px 5px rgba(0, 0, 0, .5)',
        }
    },
}));

export const TopPage = () => {

    const classes = useStyles();

    useEffect(() => {
        Aos.init({ duration: 1500 });

    }, [])
    return (
        <Grid item xs={12} className={classes.topPage} >
            <Grid xs={6} container spacing={3} className={classes.topPageContent}>
                <Grid item xs={12} data-aos="fade">
                    <h1>Les développeurs <br /> heureux au travail sont ici</h1>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">
                        WeLoveDevs.com est conçu par des développeurs <br />
                pour aider les développeurs à trouver l'entreprise où ils seront heureux
              </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={logo_W3D} alt="Logo" height="100" data-aos="zoom-out" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption">
                        CDI, freelance, alternance ou stage.
              </Typography>
                </Grid>
                <Grid item xs={2} style={{ maxWidth: 150 }} data-aos="fade-right">
                    <Button variant="contained" className={classes.signUpBtn}>
                        S'inscrire
              </Button>
                </Grid>
                <Grid item xs={3} data-aos="fade-left">
                    <Button variant="outlined" className={classes.signInBtn}>
                        Se connecter
              </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}