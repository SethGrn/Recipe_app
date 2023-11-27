import React from "react"

function RecipeView ({ recipes, deleteHandler }) {
  
  return (
    recipes.map((recipe, index) => 
              <tr>
                <td>
                  <p>{recipe.name}</p>
                </td>
                <td>
                  <p>{recipe.cuisine}</p>
                </td>
                <td>
                  <img src={recipe.photo}/>
                </td>
                <td className="content_td">
                  <p>{recipe.ingredients}</p>
                </td>
                <td className="content_td">
                  <p>{recipe.preparation}</p>
                </td>
                <td>
                  <button name="delete" onClick={() => deleteHandler(index)}>Delete</button>
                </td>
              </tr>
    )
  )
}

export default RecipeView