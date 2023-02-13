import React from "react";
const ContactMe = () => {
    console.log('===> Contact me')
    return <div className='contactMeContainer'>
        <h2>Contact me</h2>
        <ul>
            <li>address</li>
            <li>tel: 33333333</li>
        </ul>
    </div>
}

export default React.memo(ContactMe)