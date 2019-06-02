import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

function HeaderContainer() {
    return (
        <div className='header-container'>
            <div className='img-cont'>
                <ImageThumbnail/>
            </div>
            <div className='header-main-cont'>
                <HeaderTitle/>
                <HeaderContent/>
            </div>
        </div>
    )
}

export default HeaderContainer;