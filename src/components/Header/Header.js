import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Img  from '../../components/GlobalComponents/Img';
import  DivProp  from '../../components/GlobalComponents/DivProp';

class Header extends Component {
    render() {
        return (
            <div className='container'>

                <Link to='/'><Img src={require('../../assets/img/brand-icons/la-formula.svg')} className='lf-header-logo' /></Link>

                <div className='lf-header-phone'>
                    <div className = 'lf-header-alignVertical'>
                        <a href='tel:(51)1234567890'>Phone: (51)1234567890</a>
                    </div>
                </div>

                <div className = 'lf-header-socialMedia'>
                    <div className = 'lf-header-alignVertical'>
                        facebook | Google | Instagram
                    </div>
                </div>

            </div>

        )
    }
}

export default Header;