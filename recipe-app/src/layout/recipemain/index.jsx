import React from "react";


export const RecipeMain = ({ title, image, calories, cuisine, ingredient})=>{
    return(
        <>
            <section className="recipe-section">
                <div className="recipe-container">
                    <img src={image} alt={image} />
                    <div className="recipe-info">
                        <h1>{title}</h1>
                        <p>{calories}kcal</p>
                        <p>{cuisine}</p>
                        <ul className="list-container">
                            <li>{ingredient}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}