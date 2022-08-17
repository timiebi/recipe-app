import { Recipe } from "../layout/recipe";
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