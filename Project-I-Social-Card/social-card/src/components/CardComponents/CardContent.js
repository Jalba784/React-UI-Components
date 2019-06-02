import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className='card-content'>
            <div className='content-title'>
                <h2>Get started with React</h2>
            </div>
            <div className='content-para'>
                <p>
                    React makes it painless to create interactive UIs.
                    Design simple views for each state in your
                    application.
                </p>
            </div>
            <div className='content-react-web'>
                <p>
                    reactjs.org
                </p>
            </div>
        </div>
    );
}

export default CardContent;