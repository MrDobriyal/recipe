import React,{useContext} from "react";
import IngredientsList from "./IngredientsList";
import { RecipeContext } from "./App";



export default function Recipe(props){

    const {id,Name,servings,CookTime, Instructions, Ingredients}=props
const {actionDeleteRecipe,actionRecipeEdit}=useContext(RecipeContext);

return <>
<div className="recipe">
    <div className="recipe_header">
    <span className="recipe_heading">{Name}</span>
   <div className="mg-2">
    <button onClick={()=>actionRecipeEdit(id)}
    className="btn btn_primary mg-2 query_font"
    >Edit</button>
    <button onClick={()=>actionDeleteRecipe(id)}
    className="btn btn_danger mg-2 query_font"
    >Delete</button>
    </div>
</div>
<div className="recipe_items mg">
    <span className="recipeEdit__label">Cook Time:</span>
    <span>{CookTime}</span>
    </div>
<div className="recipe_items mg">
        <span className="recipeEdit__label">Servings:</span>
    <span>{servings}</span>
    </div>
    <div className="recipe_items mg">
<span className="recipeEdit__label ">Instructions:</span>
    <div className="instructions_newLine ">{Instructions}</div>
    </div>
    <div  className="recipe_items mg">
        <span className="recipeEdit__label"> Indgredients:</span>
        <IngredientsList Ingred={Ingredients}/>
       <div></div>
        
    </div>
</div>

</>
}