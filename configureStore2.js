import { createStore, combineReducers} from 'redux';
import dataReducer from '../reducers2/dataReducer';
//import imageReducer from '../reducers2/imageReducer'
 
const rootReducer = combineReducers({
  Data1:dataReducer,
 // Image1:imageReducer
});
 
export const store2 = createStore(rootReducer);