import React from "react";
import Ingredients from "./Ingredients";


export default function IngredientsList({Ingred}){
const ingredientsList=Ingred.map(ingredient=>{return  <Ingredients key={ingredient.id} {...ingredient}/>})    

return(<div>
{ingredientsList}
</div>)

}