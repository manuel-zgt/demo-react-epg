import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/layout/navbar/navbar";
import HeaderBar from "./components/layout/header/header";
import EpgGrid from "./components/epg/epg-grid/epg-grid";
import {History} from "history";


interface AppProps {
    history: History;
}

function App({history}: AppProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:1337/epg")
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setIsLoaded(true);
                    console.log('data loaded');
                    console.log(result);
                    if (result.channels) {
                        /*result.channels.schedules.map(program=>{
                            return program.
                        })*/
                        /*  const resultFiltered = result.channels.map((channel: any) => {
                              return channel.schedules.reduce((acc: any, val: any) => acc.concat((new Date(val.start)).getTime()), []);
                          });
                          console.log(resultFiltered);
                          console.log(Math.min(...resultFiltered.flat()));
                          console.log(Math.max(...resultFiltered.flat()));*/
                    }
                },
                (error) => {
                    console.log('on error');
                    console.log(error);
                }
            )
    }, [])


    const loadEpgGrid = () => {
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <EpgGrid data={data}></EpgGrid>
            );
        }
    }


    return (
        <div className="App">
            <div className="header">
                <HeaderBar/>
            </div>

            <div className="main">
                {loadEpgGrid()}
            </div>

            <div className="footer">
                <Navbar/>
            </div>

        </div>
    );
}

export default App;
