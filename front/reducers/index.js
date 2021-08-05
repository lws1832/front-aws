import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"

import user from './user'
import category from './category'


const reducer = combineReducers({
    // 인자값 하나 객체만 받는다
    index:(state={},action)=>{
        switch(action.type){
            case HYDRATE:
                return{
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    },
  user,
  category,
})

export default reducer