import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from './Menu.json'


class Menu extends Component{

    handleUpdate(id){
        for( let i = 0; i < Content.length; i += 1) {
            if(Content[i].id === id) {
                Content[i].value = "Tarciso"
            }
        }
    }

    render(){
        const Nav = () => {
            let Navigation = []
            for( let i = 0; i < Content.length; i += 1) {
                Navigation.push(
                    <div 
                    key={i}
                    onClick={() => this.handleUpdate(Content[i].id)}
                    >
                    {Content[i].value}
                    </div>
                )
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