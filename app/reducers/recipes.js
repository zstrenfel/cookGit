const recipe = (state, action) => {
  switch (action.type) {
    case 'CREATE_NEW_RECIPE':
      return {
        id: action.id,
        title: action.title,
        body: action.body
      }
    // case 'UPDATE_RECIPE':
    //   return {
    //     state
    //   }
    // case 'DELETE_RECIPE':
    //   return {

    //   }
    default:
      console.log('default ', state);
      return state;
  }
}

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEW_RECIPE':
    console.log(state);
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
      console.log('default ', state);
      return state
  }
}

export default recipes;
