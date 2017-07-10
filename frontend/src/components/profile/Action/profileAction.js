import axios from 'axios';

export const fetchProfile = (id) => {
    //need to return another function
    return (dispatch) => {
      axios.get('/api/profile/' + id)
      .then( (response) => {
        console.log("Get Profile", response);
        return dispatch({
          type: "FULFILL_PROFILE",
          profile: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
