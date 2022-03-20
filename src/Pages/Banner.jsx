import React from 'react';

function Banner(props){
    return (
        <>
        <div className="card card-overlay">
          <img
            className="img-responsive"
            src={props.groupImg}
            alt={props.groupName}
          />
          <div className="card-body">
            <h1 className="card-text">{props.groupName}</h1>
          </div>
        </div>        
        </>
    )
}

export {Banner};
