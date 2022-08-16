import { Home } from "../layout/home";
import image from '../Data';
import { useState } from "react";



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