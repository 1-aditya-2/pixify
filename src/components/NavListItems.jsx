import React from 'react';
import './navListItems.css'
function NavListItems({nav}){
    return(
        <li>
            <a href={nav.link}>{nav.name}</a>
        </li> 
    );
}

export default NavListItems;