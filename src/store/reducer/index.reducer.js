import { combineReducers } from 'redux';
import data from './AsyncFunction.reducer';
import buttonReducer from './buttonReducer';

export default combineReducers({
    data,buttonReducer
});