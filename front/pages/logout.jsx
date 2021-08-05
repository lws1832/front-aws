
import {useEffect } from "react"
import Router from "next/router"
import { useDispatch } from "react-redux"
import { UserLogoutAction } from "../reducers/user"

const Logout = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
     
        dispatch(UserLogoutAction())
        setTimeout(()=>{
            Router.back()
        },1000)
    },[])

    return(
        <>
            out
        </>
    )
}

export default Logout