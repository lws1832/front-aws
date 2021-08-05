import {createWrapper} from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import  reducer  from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

//npm i redux-thunk

const loggerMiddleare = ({dispatch, getState}) => (next) =>(action)=>{
    // console.log(action) //object
    // console.log(dispatch) //function
    // console.log(getState) //function
    console.log(action)
    return next(action)
}
// ssh -i "lee-win.pem" ubuntu@ec2-18-118-220-213.us-east-2.compute.amazonaws.com
//30 redux middleware 사용할수있는 설정까지하고 그리고 devtools사용까지
const configureStore =()=>{
    const middleware = [loggerMiddleare,thunkMiddleware]
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware))
    const Store = createStore(reducer,enhancer)
    return Store
    // createStore(reducer) === createContext 초기값 상태를 가지고 reducer안에 상태 초기값을 가지고있다.
}

// createWrapper 인자값 2개
// 첫번째 redux의 Store => const Store = createContext(initialState)
// 두번째 
const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV ==='development'
}) 

export default wrapper