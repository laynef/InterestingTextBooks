import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import book from './book';
import titles from './titles';


export default combineReducers({
    book,
    form,
    titles,
});
