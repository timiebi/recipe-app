import React from 'react';


export const Button = (props)=>{
    return(
        <>
            <button type={props.type} onClick={props.onclick} className={props.class} width={props.with} height={props.height}>{props.label}</button>
        </>
    )
}