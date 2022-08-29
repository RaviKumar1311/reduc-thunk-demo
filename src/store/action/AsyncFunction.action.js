import {FETCH_DATA} from './type.action';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
};

export const GetData = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchData(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };