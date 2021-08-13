import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
    movieReducer,
    userReducer,
});

export default allReducers;
