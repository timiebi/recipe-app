import React from 'react';



export const Image = (props)=>{
    return(
        <>
            <img src={props.source} alt={props.name} width={props.width} height={props.height} />
        </>
    )
}