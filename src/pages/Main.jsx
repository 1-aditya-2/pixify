import React from 'react';
import Schedule from './Schedule';
import './main.css';
import Trend from './Trend';
import Blog from './Blog';

function Main(){
    return(
        <main>
            <Schedule/>
            <Trend/>
            <Blog/>
        </main>
    )
}

export default Main;