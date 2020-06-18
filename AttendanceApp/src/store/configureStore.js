import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';
import adminReducer from '../reducers/admin';

//Store
export default () => {
        const store = createStore(
        combineReducers({
            user: userReducer,
            filter: adminReducer
        })
    );
return store;
};
