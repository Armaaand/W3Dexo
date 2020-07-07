import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

}));

export const Features = () => {

    const classes = useStyles();

    return (
        <Grid container xs={12} justify='center'>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
                <h2>WeLoveDevs.com c'est aussi un média pour explorer le bonheur des développeurs</h2>
            </Grid>
            <Grid container justify='center'>
                <Grid item xs={1/3} className={classes.test}>
                    <h1>Des articles</h1>
                </Grid>
                <Grid item xs={1/3} className={classes.test}>
                    <h1>Des vidéos</h1>
                </Grid>
                <Grid item xs={1/3} className={classes.test}>
                    <h1>Des tests</h1>
                </Grid>
            </Grid>

        </Grid>

    )
}