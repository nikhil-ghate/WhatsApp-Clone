export const initialState = {
  user: null
}

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_DEMO_USER: 'SET_DEMO_USER'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.SET_DEMO_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}

export default reducer
