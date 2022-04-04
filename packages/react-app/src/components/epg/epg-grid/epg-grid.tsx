import React, {useEffect, useState} from "react";

import './epg-grid.scss';
import EpgTimeline from "../epg-timeline/epg-timeline";
import EpgChannel from "../epg-channel/epg-channel";
import EpgProgram from "../epg-program/epg-program";


const EpgGrid = (props: any) => {

    const [data, setData] = useState(props.data)

    useEffect(() => {
    }, [])

    useEffect(() => {

    })

    return (
        <div
            className='epg__container'
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            <div
                className='epg'
                onScroll={event => {
                }
                }

                ref={element => {
                }}
                /*style={{

                }}*/
            >
                <section className='epg__date'>
                    <p>date</p>
                </section>
                <section className='epg__timeline'>
                    <EpgTimeline data={data}/>
                </section>
                <section className='epg__channels'>
                    <EpgChannel data={data}/>
                </section>
                <section className='epg__programs'>
                    <EpgProgram data={data}/>
                </section>
            </div>
        </div>
    )

};

export default EpgGrid;
