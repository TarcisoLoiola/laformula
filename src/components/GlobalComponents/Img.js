import React, { Component } from 'react';

class Img extends Component {
    render() {
        return (
            <div>
                <img { ...this.props } />
            </div>

        )
    }
}

export default Img;