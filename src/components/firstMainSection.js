import React from 'react';
import photo from '../img/photo.png'
import '../Styles/Main-section/right-div/main-sec_2.css'
import '../Styles/Main-section/left-div/main-sec.css'

function FirstMainSection(){
    return (
        <div className= 'main-section'>
            <div className='main-left-cont'>
                <div className="inner-div">
                    <h1 className="main-text">Let’s get fusely together</h1>
                <p>Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                <button className="getstartedtwo">Get Started</button>
                </div>
                
            </div>

            <div className="main-right-cont">
                <img src={photo} alt="girlImg" className="girlPhoto"/>
            </div>
            
        </div>
    );
}
export default FirstMainSection;