import React,{useContext} from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({recipeList}){
const {actionAddRecipe}= useContext(RecipeContext);
return <>
<div className="recipe_list">

{
recipeList.map( recipe => <Recipe  key={recipe.id} {...recipe}/>)
}

</div>
<div className="btn__center">
<button className="btn_primary btn " onClick={()=>
    actionAddRecipe()}>Add Recipe</button>
    </div>
</>


}
