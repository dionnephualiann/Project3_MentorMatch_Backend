const profile = (state={}, action) => {
  switch (action.type) {
    case 'FULFILL_GET_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
      break;

      case 'FULFILL_UPDATE_PROFILE':
        return {
          ...state,
          profile: {...state.profile, ...action.profile}
        }
        break;

    default:
      return state;

  }
}

export default profile;
