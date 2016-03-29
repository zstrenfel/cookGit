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
  console.log("id", id);
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
    type: 'RESET_INSTRUCTIONS'
  }
}