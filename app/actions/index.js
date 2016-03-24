let recipeID = 0;

export const addRecipe = (title, body) => {
  return {
    type: 'CREATE_NEW_RECIPE',
    id: recipeID ++,
    title,
    body
  }
}