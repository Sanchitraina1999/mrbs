import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import featureReducer from '../src/reducers/featureReducer'
import userReducer from '../src/reducers/userReducer'

const reducer = combineReducers({
    featureList: featureReducer,
    // userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    // userDetails: userDetailsReducer,
    // userUpdateProfile: userUpdateProfileReducer
})


// const userInfoFromStorage = localStorage.getItem('userInfo') ?
//     JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    // userLogin: {
    //     userInfo: userInfoFromStorage
    // }
}
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store