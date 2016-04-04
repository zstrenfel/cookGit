const recipe = (state, action) => {
  switch (action.type) {
    case 'CREATE_NEW_RECIPE':
      return {
        id: action.id,
        title: action.title,
        body: action.body,
        ingredients: action.ingredients,
        instructions: action.instructions,
        tags: action.tags
      }
    // case 'UPDATE_RECIPE':
    //   return {
    //     state
    //   }
    // case 'DELETE_RECIPE':
    //   return {

    //   }
    default:
      return state;
  }
}

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEW_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ]
    // case 'UPDATE_RECIPE':
    //   return [
    //     ...state,
    //     recipe(undefined)
    //   ]
    // case 'DELETE_RECIPE':
    //   console.log('delete recipe');
    //   return state
    default:
      return state
  }
}

export default recipes;
