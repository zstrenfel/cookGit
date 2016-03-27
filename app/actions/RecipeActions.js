let recipeID = 0;

export const addRecipe = (title, body) => {
  return {
    type: 'CREATE_NEW_RECIPE',
    id: recipeID ++,
    title,
    body
  }
}

export const addField = (id, text = "") => {
  console.log("id", id);
  return {
    type: 'ADD_FIELD',
    id,
    text
  }
}

export const fieldChange = (text, id) => {
  return {
    type: 'FIELD_CHANGE',
    id,
    text
  }
}

export const resetField = () => {
  return {
    type: 'RESET_FIELDS'
  }
}