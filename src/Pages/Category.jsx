import React from 'react'


function Category (props) {
    
    return ( 
        <div className="card card-overlay">
            <div className="card-header">
            <img className='img-responsive' src={props.img} alt={props.name}  />

            </div>
            <div className="card-body">
            <h3 className='card-text'>{props.name}</h3>

            </div>
        </div>
     );
}

export {Category} ;
