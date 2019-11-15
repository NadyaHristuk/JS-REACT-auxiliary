import {combineReducers} from 'redux';
import counter from './counterReducer';
import input from './inputReducer';
import history from './historyReducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
    counter,
    input,
    history,
    gallery,
})

export default rootReducer;