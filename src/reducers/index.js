import { combineReducers } from 'redux';
import { commentsReducer, adminReducer } from './data';

const reducers = combineReducers({
    comments: commentsReducer,
    isAdmin: adminReducer
})

export default reducers;