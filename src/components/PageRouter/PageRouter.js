import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import OurCulture from '../Pages/OurCulture/OurCulture';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Blog from '../Pages/Blog/Blog';
import Header from '../Header/Header';
import Menu from '../Pages/Menu/Menu';
import MenuAdmin from '../Pages/Menu/MenuAdmin';
import Home from '../Pages/Home/Home';
import Admin from '../Pages/Admin/Admin';
import Cakes from '../Pages/Cakes/Cakes';
import Cupcakes from '../Pages/Cupcakes/Cupcakes';
import Minis from '../Pages/Minis/Minis';
import Postres from '../Pages/Postres/Postres';
import Drinks from '../Pages/Drinks/Drinks';
import Others from '../Pages/Others/Others';
// import 'styles/css/index.css';
// import  from '';

class PageRouter extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className = 'lf-page-router-container'>
                    <aside className = 'lf-page-router-aside-container'>
                        <NavigationBar />
                    </aside>
                    <section className = 'lf-page-router-section-container'>
                        <Route exact path = '/' component = { Home } />
                        <Route path = '/menu' component = { Menu } />
                            <Route path = '/menu/cakes' component = { Cakes }/>
                            <Route path = '/menu/cupcakes' component = { Cupcakes }/>
                            <Route path = '/menu/minis' component = { Minis }/>
                            <Route path = '/menu/postres' component = { Postres }/>
                            <Route path = '/menu/drinks' component = { Drinks }/>
                            <Route path = '/menu/others' component = { Others }/>
                        <Route path = '/menu-admin' component = { MenuAdmin } />
                        <Route path = '/blog' component = { Blog } />
                        <Route path = '/our-culture' component = { OurCulture} />
                            <Route path = '/our-culture/contactus' component = { ContactUs } />
                        <Route path = '/admin' component = { Admin } />
                   </section>
                </div>
            </div>
            )
    }
}

export default PageRouter;