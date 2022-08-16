import React, {useState, useEffect} from "react";
import { interaction, util} from "../../component/ComponentBarrel";
import { Link } from "react-router-dom";

// components 
import { FormSection } from "../fomsection";

export const Home =({backgroundPhoto, Register, me, sign})=>{
const {HomeBackground, Bf} = backgroundPhoto;

// style for the background image althrough the home page for all screens
const stylez = {
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundAosition: 'center'
}


// state
const [formToggle, setFormToggle] = useState(false);
// const [formToggle1, setFormToggle1] = useState(false)
// const showForm = ()=>{
//     if(window.innerWidth >773){
//         console.log('mem')
//     }


// }
// useEffect(()=>{
//    window.addEventListener('resize', showForm());
//    return()=>window.addEventListener('resize', showForm())
// },[])


    return(
        <>
            <div style={stylez} className="home-container">
                <FormSection sign='sign-up'/>
                <div className="btn">
                    <interaction.Button class='register-btn' label={Register}/>
                    <Link to='/'><interaction.Button class='sign-in-btn' label={Register} /></Link>
                </div>
            </div>
           
        </>

    )
}
