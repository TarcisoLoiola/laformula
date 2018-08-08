import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OurCulture extends Component{
    render(props){
        return(
            <div>
                <div>
                    OurCulture
                    <Link to='/our-culture/contactus'><button>ContactUs</button></Link>
                </div>

            </div>
        )
    }
}

export default OurCulture;