
let initialState = {"1":""};

const fields = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FIELD':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'FIELD_CHANGE':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'RESET_FIELDS':
      return initialState;
    default:
      return state;
  }
}

export default fields;