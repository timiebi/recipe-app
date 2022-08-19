// components
import { Recipe } from "../layout/recipefsearch";

// state
import React,{useState, useEffect} from "react";

export const RecipeView = ()=>{

  

    return(
        <>
             <Recipe
             search='Search'
             />
             

        </>
    )
}


















    // useEffect(() => {
    //     client
    //        .get('?_limit=10')
    //        .then((response) => {
    //           setPosts(response.data);
    //        })
    //        .catch((error) => {
    //           console.log(error);
    //        });
    //   }, []);