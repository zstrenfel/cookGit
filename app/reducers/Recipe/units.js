
let initialState = {"1": "", "2": "", "3": ""};

const units = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_UNIT':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'UNIT_CHANGE':
      return Object.assign({}, state, {
        [action.id.toString()]: action.text
      })
    case 'RESET_UNITS':
    console.log('reset units called');
      return initialState;
    default:
      return state;
  }
}

export default units;