import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducer/productReducer';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';

const reducer= combineReducers ({
    products:productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer, 
    user: userReducer,
    forgotPassword: forgotPasswordReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;