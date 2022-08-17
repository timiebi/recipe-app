import React, {useState, useEffect} from "react";
import { interaction, util} from "../../component/ComponentBarrel";
import { Link, Outlet, Route, Routes } from "react-router-dom";

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



    return(
        <>
            <div style={stylez} className="home-container">
            {/* <Outlet/> */}
                <FormSection sign='sign-up'/>
                <div className="btn">
                <Link to='home '><interaction.Button class='register-btn' label={Register}/></Link>
                    <Link to='/'><interaction.Button class='sign-in-btn' label={Register} /></Link>
                </div>
            </div>
          
           
        </>

    )
}







// function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
//   }
  
//   export default function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
//     useEffect(() => {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }
  
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     return windowDimensions;
//   }
