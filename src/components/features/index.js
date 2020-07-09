import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';
import articleLogo from '../../img/paper.svg';
import videoLogo from '../../img/videoplayer.svg';
import testLogo from '../../img/test.svg';


import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    section: {
        justifyContent: 'center',
        marginBottom: '80px'
    },
    mainTitle: {
        textAlign: 'center',
        fontSize: '22px'
    },
    cardsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const Features = () => {

    const classes = useStyles();

    return (
        <Grid container xs={12} className={classes.section}>
            <Grid item xs={4} className={classes.mainTitle}>
                <h2>WeLoveDevs.com c'est aussi un média pour explorer le bonheur des développeurs</h2>
            </Grid>
            <Grid container xs={12} spacing={5} className={classes.cardsContainer}>
                <Grid item>
                    <div class="presentation cards">
                        <div class="wrapper wrapper1">
                            <div class="data">
                                <div class="content">
                                    <img src={articleLogo} width="50px" />
                                    <h1 class="title"><a href="#">Des articles</a></h1>
                                    <p class="text">Découvrez notre blog conçu pour valoriser le métier du développeur et inspirer son projet professionnel.</p>
                                    <a href="#" class="button">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div class="presentation cards">
                        <div class="wrapper wrapper2">
                            <div class="data">
                                <div class="content">
                                    <img src={videoLogo} width="50px" />
                                    <h1 class="title"><a href="#">Des vidéos</a></h1>
                                    <p class="text">Des formats originaux qui donnent la parole aux développeurs pour parler de leur entreprise ou de leur métier.</p>
                                    <a href="#" class="button">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div class="presentation cards">
                        <div class="wrapper wrapper3">
                            <div class="data">
                                <div class="content">
                                    <img src={testLogo} width="50px" />
                                    <h1 class="title"><a href="#">Des tests</a></h1>
                                    <p class="text">Évaluez vos connaissances sur plus de 50 QCMs informatiques pour vous exercer et prendre en main votre formation.</p>
                                    <a href="#" class="button">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Features;