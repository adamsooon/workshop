export const gender = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_GENDER':
      return action.gender;
    default:
      return state
  }
}