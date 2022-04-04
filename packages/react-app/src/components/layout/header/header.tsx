import React, {useEffect} from "react";

import './header.scss';

export interface IHeaderbarProps {
}


const HeaderBar = ({}: IHeaderbarProps) => {

    useEffect(() => {

    }, [])

    return (
        <div className='headerBar'>
            <div className="headerBar__title">
                <i className="fas fa-user">
                </i>
            </div>
            <div className="headerBar__title">
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
};

export default HeaderBar;
