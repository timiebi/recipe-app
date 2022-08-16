import React from "react";



export const ImageB = (props)=>{
    return(
        <>
            <div className="backgroundimage-container">
                <img src={props.source} alt={props.fullname}/>
            </div>
        </>
    )
}

// export const BImage = (props) =>{
//     return(
//         <>
//             <div style={props.style}></div>
//         </>
//     )
// }


