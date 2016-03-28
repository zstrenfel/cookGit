
let initialState = {};

const currentRecipe = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FIELD':
      return Object.assign({}, state, {
        title,
        [action.prev]: [action.text]
      }, {
        [action.id.toString()]: ""
      })
    case 'FIELD_CHANGE':
      return Object.assign({}, state, {
        [action.id.toString()]: [action.text]
      })
    case 'RESET_FIELDS':
      return initialState;
    default:
      return state;
  }
}

export default currentRecipe;