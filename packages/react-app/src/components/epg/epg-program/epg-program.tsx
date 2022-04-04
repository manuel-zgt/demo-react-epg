import React, {useEffect, useState} from 'react';

import './epg-program.scss';
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {setSelectedDetails} from "../../../store/details-actions";
import {useNavigate} from 'react-router-dom';

const EpgProgram = (props: any) => {

    const [data, setData] = useState(props.data)

    const [timelineDuration, setTimelineDuration] = useState(30);
    const [timelineWidth, setTimelineWidth] = useState(200);
    const [programHeight, setProgramHeight] = useState('120px');
    const [logoHeight, setLogoHeight] = useState('90px');
    const [bookmarkPosition, setBookmarkPosition] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    useEffect(() => {
        loadBookmark();
    }, [])

    const getTimeFormat = (date: Date) => {
        return `${date.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
        })}`
    }

    const selectCurrentDetail = (item: any) => {
        dispatch(setSelectedDetails(navigate, {id: 'dummyId', title: 'dummyTitle'}));
    }

    const getProgramData = (schedules: any[], index: number) => {
        let airings = [];
        airings = schedules.map((program: any) => {
            const initDate = new Date(program.start);
            const endDate = new Date(program.end);
            const initDataTime = (new Date(program.start)).getTime();
            const endDataTime = (new Date(program.end)).getTime();

            const minutes = Math.abs(endDataTime - initDataTime) / (1000 * 60) % 60;

            const programWidth = `${(minutes / timelineDuration) * timelineWidth}px`;

            return (
                <div
                    className={program.onAir > 0 ? 'schedules__program schedules__program-active' : 'schedules__program'}
                    style={{width: programWidth, height: programHeight}}
                    onClick={() => {
                        console.log('on item click');
                        selectCurrentDetail(program);
                        //setShowDetail(true);
                    }}>

                    <p className='schedules__header'>
                        {program.title}
                    </p>
                    <p>
                        {`${getTimeFormat(initDate)} - ${getTimeFormat(endDate)}`}
                    </p>
                </div>
            );
        });
        return airings;
    }


    const getBookmark = () => {
        return (
            <div className='time-bookmark' style={{left: `${bookmarkPosition}px`}}>
            </div>
        );
    }


    const getSchedules = () => {
        let epgChannelAiringsVm: any[] = [];
        epgChannelAiringsVm = data.channels.map(
            (channel: any, index: number) => {
                return (
                    <div className='schedules__programs' key={'schedule' + index}>
                        {getProgramData(channel.schedules, index)}
                    </div>
                );
            }
        );
        return epgChannelAiringsVm;
    }

    const loadBookmark = () => {
        const currentDate = new Date();
        const currentTime = currentDate.getTime();

        const bookmarkChannelsResult = data.channels.map(
            (channel: any, index: number) => {
                channel.schedules = channel.schedules.map((program: any, index: number) => {
                    const initDataTime = (new Date(program.start)).getTime();
                    const endDataTime = (new Date(program.end)).getTime();
                    if (initDataTime <= currentTime && endDataTime >= currentTime) {
                        program.onAir = 1;
                    } else {
                        program.onAir = 0;
                    }
                    return program;
                });
                return channel;
            }
        );

        const resultStartFiltered = data.channels.map((channel: any) => {
            return channel.schedules.reduce((acc: any, val: any) => acc.concat((new Date(val.start)).getTime()), []);
        });

        const minData = Math.min(...resultStartFiltered.flat());

        const minutes = Math.abs(currentTime - minData) / (1000 * 60);
        const bookmarkPaddingWidth = (minutes / timelineDuration) * timelineWidth;

        const newDataSchedule = {channels: bookmarkChannelsResult};
        setData(newDataSchedule);
        setBookmarkPosition(bookmarkPaddingWidth);
    }

    return (
        <div>
            <div className='schedules'>
                {getSchedules()}
            </div>
            {getBookmark()}
            {/*<Modal title="content detail" onClose={() => {
                setShowDetail(false);
            }} show={showDetail}>
                <p>detail content component</p>
            </Modal>*/}
        </div>
    )
};

export default EpgProgram;
