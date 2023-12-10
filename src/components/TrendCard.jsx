import React from 'react';
import './trendCard.css'

function TrendCard({slide}){
    return(
        <div className="trend-card">
        <img className="img-fluid" src={slide.previewImg}/>
        <a href="#">
            Add to WatchList <ion-icon name="list-outline"></ion-icon>
        </a>

        </div>

    )
}

export default TrendCard;