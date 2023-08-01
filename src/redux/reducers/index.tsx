import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import notesReducer from './notesReducer';

export default combineReducers({
    categories: categoriesReducer,
    notes: notesReducer
});