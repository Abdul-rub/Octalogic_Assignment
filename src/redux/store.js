import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CourseReducer as coursereducer } from "./AppReducer/reducer";

const rootReducer = combineReducers({
  coursereducer
  
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };