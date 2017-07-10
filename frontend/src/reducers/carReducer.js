const carsReducer = (state = [], action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_CAR":
      break;
    case "READ_CAR":
      break;
    case "UPDATE_CAR":
      break;
    case "DELETE_CAR":
      break;
    default:
        return state;
  }
}


export default carsReducer;
