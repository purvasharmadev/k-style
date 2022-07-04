import React from 'react';

function Banner(props){
    return (
        <>
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src={props.img}
            alt={props.name}
          />
          <div className="card-body">
            <span className="card-text">{props.name}</span>
          </div>
        </div>        
        </>
    )
}

export {Banner};
