import authenticatedReducer from './authenticatedReducer';
import inputReducer from './inputReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    authenticated: authenticatedReducer,
    inputData: inputReducer,
})

export default rootReducer