import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo_W3D from '../img/W3D_logo_white.png';
import logo_facebook from '../img/socials/facebook.svg';
import logo_twitter from '../img/socials/twitter.svg';
import logo_instagram from '../img/socials/instagram.svg';
import logo_medium from '../img/socials/medium.svg';
import logo_youtube from '../img/socials/youtube.svg';


const useStyles = makeStyles((theme) => ({
    footer: {
        //background: "linear-gradient(#220CAD 99%, #FFFFFF)",
        background: "linear-gradient(100deg, #220CAD, #140767)",
        boxShadow: '0 2px 5px 2px rgba(0, 0, 0, .9)',
        //backgroundColor: "#220CAD",
        color: "white",
        height: 'auto',
    },
    footerContent: {
        maxWidth: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: 20,
        textAlign: "left",
    },
    socials: {
        justifyContent: 'flex-end',
        marginTop: "10px",
    }
}));

export const Footer = () => {

    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.footer} >
            <Grid xs={6} container spacing={3} className={classes.footerContent}>
                <Grid item xs={12} >
                    <h3>Les développeurs <br /> heureux au travail sont ici</h3>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <Typography variant="caption">
                        hello@welovedevs.com
                        <br />
                        +33 1 75 85 02 52
                     </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={logo_W3D} alt="Logo" height="15" />
                    <Typography variant="caption">
                        <b> welovedevs.com</b>
                    </Typography>
                </Grid>
                <Grid container xs={6} spacing={3} className={classes.socials}>
                    <Grid item >
                        <img src={logo_facebook} width="25" />
                    </Grid>
                    <Grid item >
                        <img src={logo_twitter} width="25" />
                    </Grid>
                    <Grid item >
                        <img src={logo_instagram} width="25" />
                    </Grid>
                    <Grid item >
                        <img src={logo_medium} width="25" />
                    </Grid>
                    <Grid item >
                        <img src={logo_youtube} width="25" />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <p>La plateforme de contenu, créée par des développeurs, <b>qui crée du lien</b> entre les entreprises et les développeurs
                     à la recherche de l'entreprise où ils seront heureux</p>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                    <ul>Mentions Légales</ul>
                    <ul>Confidentialité</ul>
                    <ul>Reporter un bug</ul>
                </Grid>
                <Grid item xs={6}>
                    <p>© 2016 - 2020 WeLoveDevs.com - Tous droits réservés.</p>
                </Grid>
            </Grid>
        </Grid>
    )
}