import React,{useContext,} from "react";
import IngredientsEdit from "./IngredientsEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({recipe}){
  
    const {EditableRecipeValue,closeRecipeEdit,actionAddIngredients}=useContext(RecipeContext);

    function liveRecipeEditChange(change){
        EditableRecipeValue(recipe.id, {...recipe, ...change })
    }

    
  
   return(<>

    <div className="recipeEdit">
        <div className="btn_close">
            <label  onClick={closeRecipeEdit}>&times;</label>
        </div>
        <div className="recipeEdit__grid"> 
   <label className="recipeEdit__label" htmlFor="name">Name</label>
   <input className="recipeEdit__input" type="text" name="name" id="name" value={recipe.Name} 
   onChange={(e)=>liveRecipeEditChange({Name:e.target.value})}/>
   <label  className="recipeEdit__label" htmlFor="CookTime">CookTime</label>
   <input className="recipeEdit__input" type="text" name="CookTime" id="CookTime" value={recipe.CookTime}
   onChange={(e)=>liveRecipeEditChange({CookTime:e.target.value}) }/>
   <label className="recipeEdit__label" htmlFor="serving">Servings</label>
   <input  className="recipeEdit__input" type="number" min={1} name="serving" id="serving" value={recipe.servings}
    onChange={(e)=>liveRecipeEditChange({servings:parseInt(e.target.value)}) }/>
   <label  className="recipeEdit__label" htmlFor="instructions">Instructions</label>
   < textarea className="recipeEdit__input textArea__input" type="text" name="instructions" id="instructions" value={recipe.Instructions}
    onChange={(e)=>liveRecipeEditChange({Instructions:e.target.value}) }
   />
   </div>
    <br/>

    <label className="recipeEdit__label">Ingredients</label>
        <div className="recipeEdit__ingredients_grid"> 
        <div>Name</div>
        <div>Amount</div>
        <div>{}</div>
        { recipe.Ingredients.map((ingredient)=>{return <IngredientsEdit key={ingredient.id} ingredient={ingredient} />}) }
</div>

    <div className="btn__center_ingredient">
        <button className="btn_primary btn " onClick={()=>{actionAddIngredients()}}>Add Ingredients</button>
    </div>
    </div>

    </>)
}