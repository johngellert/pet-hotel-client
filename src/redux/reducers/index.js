import { combineReducers } from 'redux';
import user from './userReducer';
import pets from './petReducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so or project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  user,
  pets, // will have an id and username if someone is logged in

});

export default rootReducer;
