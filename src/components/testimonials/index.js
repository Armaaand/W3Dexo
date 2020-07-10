import React, { Component } from 'react';
import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';

import quote from "../../img/quote.png";
import avatar1 from "../../img/avatars/1.jpeg";
import avatar2 from "../../img/avatars/2.jpeg";
import avatar3 from "../../img/avatars/3.jpeg";
import avatar4 from "../../img/avatars/4.jpeg";
import avatar5 from "../../img/avatars/5.jpeg";



class testimonials extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 320,
                    settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true }
                },
            ]
        }
        return (
            <div className="container">
                <div className="title">
                    <h2>Des milliers de développeurs travaillent dans une entreprise découverte ici</h2>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>J'ai trouvé mon nouveau job en Full-Remote avec WeLoveDevs.com. Parfait pour les développeurs à l'écoute de nouvelles opportunités.</p>
                        </div>
                        <div className="avatar">
                            <Avatar alt="Flavien Beninca" src={avatar1} />
                        </div>
                        <div className="avatarName">
                            <p>Flavien Beninca</p>
                            <Typography variant="caption">
                                Lead Dev Full Remote @ Obat
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>Le site est très efficace ! Les mises en relations sont beaucoup moins fréquentes que sur d'autres sites, mais de bien meilleure qualité.</p>
                        </div>
                        <div className="avatar">
                            <Avatar alt="Christelle Verdier" src={avatar2} />
                        </div>
                        <div className="avatarName">
                            <p>Christelle Verdier</p>
                            <Typography variant="caption">
                                Chief People Officier @ Ippon Tech
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>La plateforme a choisit de placer les interactions humaines au coeur de sa stratégie. Dès le début ous avons sentir un accompagnement fort et personnalisé de
                            la part de l'équipe pour créer des espaces d'échanges avec les candidats. Nous avons rapidement rencontré des candidats. Nous avons rapidement rencontré des candidats
                            qui partagent notre vision et nos valeurs et qui ont rejoint Ippon Technologies.
                            </p>
                        </div>
                        <div className="avatar">
                            <Avatar alt="Thierry Poupart" src={avatar3} />
                        </div>
                        <div className="avatarName">
                            <p>Thierry Poupart</p>
                            <Typography variant="caption">
                                Recrute pour NoConsulting
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>Venant d'obtenir mon BTS SIO à l'EPSI de Lille, suis-je le futur alternant chez WeLoveDevs ?</p>
                        </div>
                        <div className="avatar">
                            <Avatar alt="Armand Gentot" src={avatar4} />
                        </div>
                        <div className="avatarName">
                            <p>Armand Gentot</p>
                            <Typography variant="caption">
                                Etudiant @ EPSI Lille
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>Le site est très efficace ! Les mises en relations sont beaucoup moins fréquentes que sur d'autres sites, mais de bien meilleure qualité.</p>
                        </div>
                        <div className="avatar">
                            <Avatar alt="John Doe" src={avatar5} />
                        </div>
                        <div className="avatarName">
                            <p>John Doe</p>
                            <Typography variant="caption">
                                Lead Dev @ Auchan
                            </Typography>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default testimonials;