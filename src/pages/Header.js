import React from 'react';
import NavListItems from '../components/NavListItems';
import navListData from '../data/navListData';
import Search from '../components/Search';
import './header.css';
import Button from '../components/Button';

function Header(){
    return(
        <header>
            <a href='/' className="logo">Pixify</a>
            <ul className="nav">
            {
                navListData.map(nav=>(
                    <NavListItems key={nav._id} nav={nav}/>
                ))
            }
            </ul>
            <Search/>
            <Button
                icon={<ion-icon name="log-in-outline"></ion-icon>}
                name="SignIn"
            
            />
        </header>
    );
}

export default Header;