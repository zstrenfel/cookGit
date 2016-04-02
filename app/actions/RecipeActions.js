let recipeID = 0;

export const addRecipe = (title, body) => {
  return {
    type: 'CREATE_NEW_RECIPE',
    id: recipeID ++,
    title,
    body
  }
}

export const addInstruction = (id, text = "") => {
  return {
    type: 'ADD_INSTRUCTION',
    id,
    text
  }
}

export const instructionChange = (id, text) => {
  return {
    type: 'INSTRUCTION_CHANGE',
    id,
    text
  }
}

export const resetInstructions = () => {
  return {
    type: 'RESET_INSTRUCTIONS'
  }
}

export const titleChange = (label, text) => {
  return {
    type: 'FIELD_CHANGE',
    label,
    text
  }
}

export const resetTitle = () => {
  console.log('resetting title');
  return {
    type: 'RESET_TITLE'
  }
}

export const ingredientChange = (id, text) => {
  return {
    type: 'INGREDIENT_CHANGE',
    id,
    text
  }
}

export const addIngredient = (id, text="") => {
  console.log('add ingredient called');
  return {
    type: 'ADD_INGREDIENT',
    id,
    text
  }
}

export const unitChange = (id, text) => {
  return {
    type: 'UNIT_CHANGE',
    id,
    text
  }
}

export const addUnit = (id, text="") => {
  return {
    type: 'ADD_UNIT',
    id,
    text
  }
}

export const resetUnits = () => {
  return {
    type: 'RESET_UNITS'
  }
}



