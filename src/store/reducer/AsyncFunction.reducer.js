import { FETCH_DATA } from '../action/type.action';

export default function AsyncFunctionReducer(state = [], action) {
  switch (action.type) {
      case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
}