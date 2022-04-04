import React, {useEffect, useState} from "react";

import './epg-channel.scss';


const EpgChannel = (props: any) => {
    const [data, setData] = useState(props.data);
    const [logoWidth, setLogoWidth] = useState('180px');
    const [logoHeight, setLogoHeight] = useState('90px');

    useEffect(() => {

    }, [])

    const getChannels = () => {
        let channels = [];
        channels = data.channels.map(
            (channel: any, index: number) => {
                return (
                    <div className='channels__logo-wrapper' key={'channel' + index}>
                        {/*<img width={logoWidth} height={logoHeight} src={channel.images.logo}></img>*/}
                        <img className='channels__logo-image'
                             src="https://raw.githubusercontent.com/Tapiosinn/tv-logos/master/countries/united-states/cnn-us.png">

                        </img>
                    </div>
                );
            }
        );
        return channels;
    }

    return (
        <div className='channels'>
            {getChannels()}
        </div>
    )
};

export default EpgChannel;
