import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { interaction } from "../../component/ComponentBarrel";
import { RecipeMain } from "../recipemain";
import burger from "../../assets/burger.jpg";


export const Recipe =({search})=>{
    // state for the input 
    const [searchs, setsearch] = useState('')
    const searchWord = e=> setsearch(e.target.value) // input value

    // state for to manage the expected api 
    const [datas, setData] = useState([]);
    const [check, setCheck] = useState('chicken');

    //    loading 
    const [loading, setLoading] = useState(true);
      

      // API requests 
      const APP_ID = "c0e32fc9";
      const APP_KEY = "322dfa64ffc7cd6bc1f02ab1ddeaf9a6";
      
   
       const recipe = async ()=>{
           const response = await fetch(`https://api.edamam.com/search?q=${check}&app_id=${APP_ID}&app_key=${APP_KEY}`)
           const recipeData = await response.json();
           setData(recipeData.hits);
           console.log(recipeData.hits)
       }
   
        useEffect(() => {
           recipe();
       }, [check]);

    // form submit action
    const submit = e=>{
        e.preventDefault()
        setCheck(searchs);
    }

    const click = ()=>{
        setsearch('');

    }
    return(
        <>
         <RECIPE>
            <form onSubmit={submit} className="search">
                    <input type="text" value={searchs} onChange={searchWord} placeholder='Search' />
                    <interaction.Button label={search} onclick={click} />
                </form>
                {!loading ?
                (
                    <p style={{textAlign: 'center', color: '#fff', fontWeight: '600', fontSize: '1.2em'}}>Loading...</p>
                )
            :
            (<>
                {datas.map(data =>(
                <RecipeMain
                title={data.recipe.label}
                image={data.recipe.image}
                calories={data.recipe.calories}
                cuisine={data.recipe.cuisineType}
                ingredient={data.recipe.ingredientLines}/>
            ))}
            </>)}
         </RECIPE>
        </>
    )
}

// using styled component for the background image on the reciipe section 
export const RECIPE = styled.div`
    background-image: url(${burger});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: 1;
`