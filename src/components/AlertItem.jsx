import './AlertItem.css'
import React from 'react' 

function AlertItem(props) {
    return(
        <div className="alert-container">
            <p className="alert-description">{props.message}</p>
            
            <div className="alert-category-container">
                {props.tags.map((tag, index) => {
                    return <span key={index+1} className="category">{tag}</span>
                })}
            </div>
            
            <div className="value-container">
                <i className="value-title">Valor líquido</i>
                <span className="value-quantity"><span className="currency">R$</span> <span className='currency-value'>{props.value}</span></span>
            </div>
        </div>
    ); 
}

export default AlertItem