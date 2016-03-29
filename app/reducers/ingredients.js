
let initialState = {};

const instructions = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_INSTRUCTION':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'INSTRUCTION_CHANGE':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'RESET_INSTRUCTIONS':
      return initialState;
    default:
      return state;
  }
}

export default instructions;