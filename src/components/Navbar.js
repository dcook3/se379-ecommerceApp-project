import React, { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import themeIcon from '../assets/theme.svg'

const Navbar = (props) => {
    const {theme} = useContext(ThemeContext);

    return (
        <nav className="navbar navbar-expand-md px-2" style={{backgroundColor: theme.foreground}}>
            <Link className='navbar-brand' to="/">Site Brand</Link>
            <div className='container-fluid'>
                <div className="navbar-nav">
                    <Link className='nav-link' to="/Products">Products</Link>
                    <Link className='nav-link' to="/About">About</Link>
                </div>
                <button className="btn btn-primary" onClick={props.toggleTheme}><img src={themeIcon}></img></button>
            </div>
        </nav>
    )
}

export default Navbar;