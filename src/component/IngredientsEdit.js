import { useContext } from "react"
import { RecipeContext } from "./App"


export default function IngredientsEdit({ingredient}){

    const {editableIngredientsValue,actionRemoveIngredient}=useContext(RecipeContext);
    return(<>
    <input className="recipeEdit__input" value={ingredient.Name} 
    onChange={(e)=>{editableIngredientsValue(ingredient.id,{...ingredient,Name:e.target.value})}}
    ></input>

    <input className="recipeEdit__input" value={ingredient.amount}
     onChange={(e)=>{editableIngredientsValue(ingredient.id,{...ingredient,amount:e.target.value})}}
    ></input>
    <button className="btn_danger btn" onClick={()=>{actionRemoveIngredient(ingredient.id)}}>&times;</button>
    </>)
}