import { MobileHomeform } from "../layout/mobileformhome";
import image from '../Data';
import { useState } from "react";


export const MobileFormView = () =>{
    const [imagez, setImage] = useState(image);
    return(
        <>
        <MobileHomeform
        backgroundPhoto={imagez}
        />
    </>
    )
}