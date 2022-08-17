import { Home, MobileFormHome } from "../layout/home";
import image from '../Data';
import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 



export const HomeView =()=>{
    const [imagez, setImage] = useState(image);

    return(
        <>
            <Home
            backgroundPhoto={imagez}
            Register = 'Register'
            />
        </>
    )
}