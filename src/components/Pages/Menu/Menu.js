import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from './Menu.json'


class Menu extends Component{
    render(){
        const Nav = () => {
            let Navigation = []
            for( let i = 0; i < Content.length; i += 1) {
                Navigation.push(
                    <Link key={i} to = {Content[i].link}>{Content[i].value}</Link> )
            }
            return Navigation
        }
        return(
            <div>
                Menu
                {Nav()}
                              
            </div>
        )
    }
}

export default Menu;