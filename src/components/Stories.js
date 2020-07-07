import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo_W3D from '../img/W3D_logo_white.png';




const useStyles = makeStyles((theme) => ({
    test : {
        backgroundColor:'red',
    }
}));

export const Stories = () => {

    const classes = useStyles();

    return (
        <Grid container xs={12} justify='center'>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
                <h2>Des milliers de développeurs travaillent dans une entreprise découverte ici</h2>
            </Grid>
            <Grid item xs={10} className={classes.test}>
                <h1>Avis avis avis avis</h1>
            </Grid>
        </Grid>

    )
}