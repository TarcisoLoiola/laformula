import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component{
    render(){
        return(
            <div>
                Menu
                <Link to = '/menu/cakes'><button> Cakes </button></Link>               
                <Link to = '/menu/cupcakes'><button> Cupcakes </button></Link>               
                <Link to = '/menu/minis'><button> Mini Cakes </button></Link>               
                <Link to = '/menu/postres'><button> Postres </button></Link>               
                <Link to = '/menu/drinks'><button> Drinks </button></Link>               
                <Link to = '/menu/others'><button> others </button></Link>               
            </div>
        )
    }
}

export default Menu;