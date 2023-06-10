import React from "react";

export default function Ingredients({Name,amount}){
return(<>
<div className="ingredients_grid">
    <span className="ingredients">{Name }</span>
    <span className="ingredients">{amount }</span>
</div>
</>)

}