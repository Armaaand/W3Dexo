import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import logo_ippon from "../img/companies/ippon_logo.png"
import logo_tilleuls from "../img/companies/les_tilleuls_logo.png"
import logo_ouisncf from "../img/companies/Oui_sncf_logo.png"
import logo_pictime from "../img/companies/pictime_logo.png"
import logo_soat from "../img/companies/soat_logo.png"
import logo_vaduo from "../img/companies/vaduo_logo.png"

const useStyles = makeStyles((theme) => ({
    companiesBox: {
        borderRadius: "20px",
        background: "linear-gradient(145deg, #d6d6d6, #ffffff)",
        boxShadow: "20px 20px 40px #cacaca,-20px 0px 60px #eeeeee",
        height: "100px",
        width: "200px",
        display: "flex",
        margin: "20px",
        transition: "0.1s",
        "&:hover": {
            borderRadius: "15px",
            height: "105px",
            width: "210px",
            margin: "15px 20px",
        }
    },
    companiesLogo: {
        margin: "auto"
    }
}));

export const DisplayCompanies = () => {

    const classes = useStyles();

    return (
        <Grid container justify="center" style={{ margin: "30px" }}>
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


    )

}