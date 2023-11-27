import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState(initialFormData);
  
  
  const changeHandler = ({ target }) => {
    setFormData({
      
      ...formData,
      [target.name]: target.value
  })
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData(initialFormData);
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" id="name" type="text" onChange={changeHandler} value={formData.name} placeholder="Name"/>
            </td>
            <td>
              <input name="cuisine" id="cuisine" type="text" onChange={changeHandler} value={formData.cuisine} placeholder="Cuisine" />
            </td>
            <td>
              <input name="photo" id="photo" type="url" onChange={changeHandler} value={formData.photo} placeholder="Photo" />
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" type="text" onChange={changeHandler} value={formData.ingredients} placeholder="Ingredients" />
            </td>
            <td>
              <textarea name="preparation" id="preparation" type="text" onChange={changeHandler} value={formData.preparation} placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
