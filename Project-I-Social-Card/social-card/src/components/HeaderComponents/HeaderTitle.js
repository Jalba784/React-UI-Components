import React from 'react';
import './Header.css';

function HeaderTitle() {
    let date = ' 26 jan';

    return (
        <h1 className='lambda-top-title'>Lambda School <span className='cyberLambda'>@LambdaSchool </span><span className='timeStamp'>&#183;{date}</span></h1>
    )
}

export default HeaderTitle;