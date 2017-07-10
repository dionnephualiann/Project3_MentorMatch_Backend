
import axios from 'axios';



const loadingCars = () => {
  return {
    type: "LOADING_CARS",
    status: "Loading"
  }
}

const addCars = (cars) => {
  return {
    type: "ADD_CARS",
    cars
  }
}

const loadCarsError = (error) => {
  return {
    type: "LOAD_CARS_ERROR",
    error
  }
}

export const initCars = () => {
  return (dispatch) => {

    dispatch(loadingCars());
    axios.get('/api/')
      .then( (response) => {
        dispatch(addCars(response.data));
      })
      .catch((error)=> {
        dispatch(loadCarsError(error));
      });
  }
}

store.dispatch(initCars);




export const createCar = (car) => {
  return {
    type: 'CREATE_CAR',
    car
  }
}

export const readCar = (car) => {
  return {
    type: 'READ_CAR',
    car
  }
}

export const updateCars = (car) => {
  return {
    type: 'UPDATE_CAR',
    car
  }
}

export const deleteCar = (car) => {
  return {
    type: 'DELETE_CAR',
    car
  }
}
