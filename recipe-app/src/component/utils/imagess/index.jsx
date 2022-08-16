import React from 'react';



export const Image = (props)=>{
    return(
        <>
          <div className="imagecontainer" style={{width: props.width, height: props.height}}>
            <img src={props.source} alt={props.name} />
          </div>
        </>
    )
}