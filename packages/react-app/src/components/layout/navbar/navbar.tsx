import React, {useEffect} from 'react';

import './navbar.scss';

export interface INavbarProps {
}

const Navbar = ({}: INavbarProps) => {

    useEffect(() => {

    }, [])

    return (
        <div className='navbar'>
            <div className="navbar__title">
                <i className="fas fa-home">
                </i>
            </div>
            <div className="navbar__title">
                <i className="fas fa-tv"></i>
            </div>
            <div className="navbar__title">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="navbar__title">
                <i className="fa-solid fa-rotate-left"></i>
            </div>
            <div className="navbar__title">
                <i className="fa-solid fa-book-open-reader"></i>
            </div>
        </div>
    )
};

export default Navbar;
