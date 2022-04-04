import React, {useEffect} from 'react';

import './details.scss';
import HeaderBar from "../../components/layout/header/header";
import Navbar from "../../components/layout/navbar/navbar";
import {useAppSelector} from "../../hooks/redux-hooks";

import imageBannerTest from '../../image01.jpg';
import imagePlayButton from '../../playButton.png';

const Details = (props: any) => {

    const currentDetail = useAppSelector(state => state.detail.selectedDetail);

    useEffect(() => {

    }, []);


    return (
        <div className="details">
            <div className="header">
                <HeaderBar/>
            </div>

            <div className="main">
                <div className="main__content">
                    <div className="main__banner">
                        <img className="main__banner-image" src={imageBannerTest}/>
                        <div className="main__banner-overlay">
                            <div className="main__banner-overlay__container">
                                <img className="main__banner-overlay-play" src={imagePlayButton}/>
                            </div>
                        </div>
                    </div>

                    <div className="main__channel-detail">
                        <div className="main__channel-title">
                            COMEDY CENTRAL
                        </div>
                        <div className="main__channel-time">
                            14:30 - 17:00 <span>&#8226;</span> 3 May
                        </div>
                    </div>

                    <div className="main__content-detail">
                        <div className="main__content-title">
                            Prometheus
                        </div>
                    </div>

                    <div className="main__content-detail">
                        <div className="main__content-metadata">
                            2015
                        </div>
                        <div className="main__content-metadata">
                            Romance
                        </div>
                        <div className="main__content-metadata">
                            Drama
                        </div>
                    </div>

                    <div className="main__content-detail">
                        <div className="main__content-metadata">
                            Following a faint trail of clues, the accomplished archaeologist, Doctor Elizabeth Shaw, and
                            her partner, Charlie Holloway, along with a seventeen-man crew, embark on an ambitious,
                            deep-space scientific expedition. Aboard the revolutionary space-exploration starship, USCSS
                            Prometheus, the team sets foot on the rocky terrain of the desolate exomoon, LV-223, in
                            2093, to investigate the existence of the superior extraterrestrial species known as the
                            "Engineers"
                        </div>
                    </div>


                </div>

            </div>

            <div className="footer">
                <Navbar/>
            </div>
        </div>
    )
};

export default Details;
