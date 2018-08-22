export const country = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_COUNTRY':
      return action.country;
    default:
      return state
  }
}