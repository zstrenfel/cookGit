let recipeID = 0;

export const addRecipe = (title, body, ingredients, instructions, tags) => {
  return {
    type: 'CREATE_NEW_RECIPE',
    id: recipeID ++,
    title,
    body,
    ingredients,
    instructions,
    tags
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
  return {
    type: 'ADD_INGREDIENT',
    id,
    text
  }
}

export const resetIngredients = () => {
  return {
    type: 'RESET_INGREDIENTS'
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



