import './AlertItem.css'
import React from 'react' 

function AlertItem(props) {
    return(
        <div className="alert-container">
            <p className="alert-description">ALERT DESCRIPTION HERE</p>
            
            <div className="alert-category-container"></div>
            
            <div className="value-container">
                <i className="value-title"></i>
                <span className="value-quantity"></span>
            </div>
        </div>
    ); 
}

export default AlertItem