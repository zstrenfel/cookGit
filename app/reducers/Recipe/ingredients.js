
let initialState = {"1":"", "2": "", "3": ""};

const ingredients = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_INGREDIENT':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'INGREDIENT_CHANGE':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'RESET_INGREDIENTS':
      console.log('reset ingredients callsd');
      return initialState;
    default:
      return state;
  }
}

export default ingredients;