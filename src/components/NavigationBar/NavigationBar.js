import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <div className='lf-navigation-container'>
                <ul>

                    <li className={window.location.pathname === "/" ? "active" : ""}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={window.location.pathname === "/menu" ? "active" : ""}>
                        <Link to='/menu'>Menu</Link>
                    </li>
                    <li className={window.location.pathname === "/blog" ? "active" : ""}>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className={window.location.pathname === "/our-culture" ? "active" : ""}>
                        <Link to='/our-culture'>Our culture</Link>
                    </li>
                    <li className={window.location.pathname === "/admin" ? "active" : ""}>
                        <Link to='/admin'> Admin</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;