import React from 'react';
import './Card.css';

import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

function CardContainer() {
    function redirectToReact() {
        window.location = "https://www.reactjs.org";
    }
    return (
        <div className='card-cont' onClick={redirectToReact}>
            <CardBanner/>
            <CardContent/>
        </div>
    );
}

export default CardContainer;