import React,{useState} from "react";
import { interaction } from "../../component/ComponentBarrel";


export const Recipe =({search})=>{
    // state for the input 
    const [searchs, setsearch] = useState('')
    const searchWord = e=> setsearch(e.target.value) // input value

    // form submit action
    const submit = e=>{
        e.preventDefault()
    }

    const click = ()=>{
        setsearch('')
    }
    return(
        <>
            <form onSubmit={submit} className="search">
                <input type="text" value={searchs} onChange={searchWord} placeholder='Search' />
                <interaction.Button label={search} onclick={click} />
            </form>
            dd
        </>
    )
}