import React from 'react';
import './Header.css';

function HeaderTitle() {
    var options = {month: 'short', day: '2-digit'};
    let timestamp = new Intl.DateTimeFormat('en-US', options).format(date);

    return (
        <h1>Lambda School <span className={'cyberLambda'}>@LambdaSchool</span><span className={'timeStamp'}>{timestamp}</span></h1>
    )
}

export default HeaderTitle;