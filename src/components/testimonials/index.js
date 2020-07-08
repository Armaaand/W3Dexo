import React, { Component } from 'react';
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import quote from "../../img/quote.png";
import Avatar from '@material-ui/core/Avatar';


class testimonials extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: false,
            speed: 500,
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
                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>J'ai trouvé mon nouveau job en Full-Remote avec WeLoveDevs.com. Parfait pour les développeurs à l'écoute de nouvelles opportunités.</p>
                        </div>
                        <div className="avatar">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </div>

                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>Le site est très efficace ! Les mises en relations sont beaucoup moins fréquentes que sur d'autres sites, mais de bien meilleure qualité.</p>
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
                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>Je cherche une alternance, pourquoi pas chez WeLoveDevs ?</p>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src={quote} width='30px' />
                            <p>Le site est très efficace ! Les mises en relations sont beaucoup moins fréquentes que sur d'autres sites, mais de bien meilleure qualité.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default testimonials;