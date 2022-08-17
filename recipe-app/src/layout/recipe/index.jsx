import React from "react";
import { interaction } from "../../component/ComponentBarrel";


export const Recipe =({search})=>{
    return(
        <>
            <form className="search">
                <input type="text" />
                <interaction.Button label={search} />
            </form>
        </>
    )
}