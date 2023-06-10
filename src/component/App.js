import React,{useState,useEffect} from "react"
import RecipeList from "./RecipeList";
import '../css/App.css';
import RecipeEdit from "./RecipeEdit";

const localStorageKey="recipeListSaving";
export const RecipeContext=React.createContext();

function App() {
const [recipeEditId,setRecipeEditId]=useState();  
const [recipe,addRecipe]=useState(recipeList);
const selectedRecipeId=recipe.find(r=>r.id===recipeEditId);

useEffect(()=>{
  

  const recipeJson=localStorage.getItem(localStorageKey)
 
if(recipeJson!=null)addRecipe(JSON.parse(recipeJson))

},[])


useEffect(()=>{localStorage.setItem(localStorageKey,JSON.stringify(recipe))},[recipe]);

const contextValue={
  actionAddRecipe,actionDeleteRecipe,actionRecipeEdit,EditableRecipeValue,closeRecipeEdit,
  editableIngredientsValue,actionAddIngredients,actionRemoveIngredient}
  return (
  <RecipeContext.Provider value={contextValue}>
  <RecipeList recipeList={recipe} />
  {selectedRecipeId && <RecipeEdit recipe={selectedRecipeId} />}
  </RecipeContext.Provider>
  );

  function actionRemoveIngredient(Ingredientid){
    let ingredient=[...recipe]
    const recipeIndex=ingredient.findIndex((r)=>{return r.id===selectedRecipeId.id});
    ingredient[recipeIndex].Ingredients=ingredient[recipeIndex].Ingredients.filter((i)=>{return i.id!==Ingredientid});
    
    addRecipe(ingredient);
  }

  function editableIngredientsValue(id,change){
    let ingredient=[...recipe];
    
    const selectedRecipeIndex= ingredient.findIndex((r)=>r.id===selectedRecipeId.id);
  
   const ingredientIndex= ingredient[selectedRecipeIndex].Ingredients.findIndex(i=>i.id===id);

    ingredient[selectedRecipeIndex].Ingredients[ingredientIndex]=change;
    addRecipe(ingredient);
        }

function EditableRecipeValue(id,change){
  let copyRecipe=[...recipe];
  const index=copyRecipe.findIndex(recipe=>id===recipe.id);
  copyRecipe[index]=change;
  addRecipe(copyRecipe);
}

 function closeRecipeEdit(){
  setRecipeEditId(undefined);
 }

function actionRecipeEdit(id){
 setRecipeEditId(id)
}

  function actionDeleteRecipe(id){
    addRecipe(recipe.filter((rec)=>{return rec.id!==id}));
  }

function actionAddIngredients(){
  const ingred={
    id:Date.now().toString()+5,
    Name:"",
    amount:""
  }
  let ingredients=[...recipe];
  const currentRecipeIndex=recipe.findIndex((r)=>{return r.id===selectedRecipeId.id});
  ingredients[currentRecipeIndex].Ingredients.push(ingred);
addRecipe(ingredients);

}

  function actionAddRecipe(){
    const recipes=
        {id:Date.now().toString(),
            Name:"",
              CookTime:"",
            servings:"",
          Instructions:"",
          Ingredients:[{id:Date.now().toString(),Name:"",amount:""},
          {id:Date.now().toString()+2,Name:"",amount:""}
          ]
            }
            setRecipeEditId(recipes.id);
            addRecipe([...recipe,recipes]);
    }
}

const recipeList=[
  {id:1,
  Name:"paratha",
    CookTime:"1:20",
  servings:"20",
Instructions:"1.make dow \n 2.Flat the roti \n 3.INto gas",
Ingredients:[{id:1,Name:"salt",amount:"200tbs"},
{id:2,Name:"aata",amount:"15kg"}
]
  },
  
    {id:2,
      Name:"sabji",
        CookTime:"2:20",
      servings:"200",
    Instructions:"1.cut vegetable\n2.boil vegetable\n3.eat vegeatble",
    Ingredients:[{ id:3, Name:"pepper",amount:"20tbs"},
    {id:4,Name:"vegetable",amount:"1kg"}
    ]
  }


]

export default App;
