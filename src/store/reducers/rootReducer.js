import authReducer from './authReducer'
import orderReducer from './orderReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firestore } from 'firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    order: orderReducer,
    firestore: firestoreReducer
})

export default rootReducer