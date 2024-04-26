import React from "react";

function DisplaySection({triggerPreview}) {
    const handleTopButton = () =>{
        // const element = document.querySelector(".jumbotron-section")
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:"smooth"
            
            
        })
    }

   
    return ( 
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant.</p>
            <span className="description">
                a display that's up to 2x brighter in the sun.

            </span>
        <button className="button" onClick={triggerPreview}>Try Me!</button>
        <button className="back-button" onClick={handleTopButton}>TOP</button>

        </div>
    );
}

export default DisplaySection;