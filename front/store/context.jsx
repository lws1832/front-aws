import {createContext} from 'react'

export const initalState={
    IsLogin:true,
}
const Store = createContext(initalState)

export default Store