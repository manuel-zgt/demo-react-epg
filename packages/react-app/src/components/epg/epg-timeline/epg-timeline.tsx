import React, {useEffect, useRef, useState} from "react";

import './epg-timeline.scss';


const useSingleton = (initializer: any) => {
    React.useState(initializer)
}

const EpgTimeline = (props: any) => {

    const [data, setData] = useState(props.data)

    useSingleton(() => {
        console.log('once');
    })

    const [timelineDuration, setTimelineDuration] = useState(30);
    const [timelineWidth, setTimelineWidth] = useState(200);
    const [startTimeInEpoch, setStartTimeInEpoch] = useState(1586736000000);
    const [endTimeInEpoch, setEndTimeInEpoch] = useState(1586822340000);


    const loadInitialData = () => {
        if (!data) return;
        const resultStartFiltered = data.channels.map((channel: any) => {
            return channel.schedules.reduce((acc: any, val: any) => acc.concat((new Date(val.start)).getTime()), []);
        });
        const resultEndFiltered = data.channels.map((channel: any) => {
            return channel.schedules.reduce((acc: any, val: any) => acc.concat((new Date(val.end)).getTime()), []);
        });

        //console.log(Math.min(...resultStartFiltered.flat()));
        setStartTimeInEpoch(Math.min(...resultStartFiltered.flat()));
        //console.log(Math.max(...resultEndFiltered.flat()));
        setEndTimeInEpoch(Math.max(...resultEndFiltered.flat()));
    }

    useEffect(() => {
        console.log('executed....');
        loadInitialData();
    }, [])


    const getTimes = () => {
        const times = [];
        let startTime = startTimeInEpoch;
        for (let i = 0; startTime <= endTimeInEpoch; i++) {
            const date = new Date(startTime);
            const hours = ('0' + date.getHours()).slice(-2);
            const minutes = ('0' + date.getMinutes()).slice(-2);

            times[i] = `${hours}:${minutes}`;

            startTime = startTime + timelineDuration * 60 * 1000;
        }
        return times;
    }

    const renderTimeline = () => {
        let items = [];
        const times = getTimes();
        items = times.map((time, index) => {
            return (
                <div
                    key={time}
                    /*style={{width: `${timelineWidth}px`}}*/
                    className='timelines__timeWrapper'>

                    <span className='timelines__timeWrapper__time'
                          style={{left: index == 0 ? '0px' : '-18px'}}>
                        {time}
                    </span>

                    <div className='timelines__timeWrapper__frames'>
                        <div className='time-frame'>
                        </div>
                        <div className='time-frame'>
                        </div>
                    </div>

                </div>
            );
        });
        return items;
    }


    return (
        <div className='timelines'>
            {renderTimeline()}
        </div>
    )
};

export default EpgTimeline;
