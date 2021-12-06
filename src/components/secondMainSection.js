import React from 'react';
import photoTwo from '../img/secondImg.png'
import '../Styles/Main-section-two/second-cont.css'



function SecondMainSection() {
    return (
        
            <div className= 'main-section'>
            

            <div className="main-right-cont">
                <img src={photoTwo} alt="girlImg" className="girlPhotoTwo"/>
            </div>
            <div className='main-left-cont'>
                <div className="inner-div">
                    <h1 className="main-text">Detailed Examination</h1>
                <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                <h5 className="learnMore">Learn more</h5>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default SecondMainSection
