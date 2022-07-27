import React from 'react';


export const Button = (props)=>{
    return(
        <>
            <button className={props.className} width={props.with} height={props.height}>{props.label}</button>
        </>
    )
}