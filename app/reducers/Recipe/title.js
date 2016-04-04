
let initialState = {"title":"", "description":""};

const title = (state = initialState, action) => {
  switch(action.type) {
    case 'FIELD_CHANGE':
      return Object.assign({}, state, {
        [action.label]: action.text
      })
    case 'RESET_TITLE':
      return initialState;
    default:
      return state;
  }
}

export default title;