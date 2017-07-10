const events = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return [
        ...state,
        {
          text: action.text,
          date: new Date(),
        }
      ]

      break;

    default:
      return state;

  }
}

export default events;
