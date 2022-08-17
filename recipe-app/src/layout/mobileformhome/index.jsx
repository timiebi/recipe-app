import React, {useState, useEffect} from "react";
import { MobileForm } from "../fomsection";
import { Link, Outlet, Route, Routes } from "react-router-dom";


export const MobileHomeform = ({backgroundPhoto})=>{
    const {HomeBackground, Bf} = backgroundPhoto;

    // style for the background image althrough the home page for all screens
    const styles = {
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundAosition: 'center',
        height: '100vh' 
    }
    
    
    // state
    const [formToggle, setFormToggle] = useState(false);
    
    
    
        return(
            <>
                <div style={styles} className="mobile-home-container">
                   <MobileForm sign='register'/>
                </div>
            </>
    
        )
}