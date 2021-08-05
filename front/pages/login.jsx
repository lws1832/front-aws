import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import Router from "next/router"
import useInput from "../hooks/useinput"
import {useDispatch,useSelector} from 'react-redux'
import { UserLoginAction } from "../reducers/user"
import { useEffect } from "react"




  // const [userid,setUserid] = useState('')
    // const [userpw,setUserpw] = useState('')

    // const ChangeUserid = e => {
    //     const {value} = {...e.target}
    //     setUserid(value)
    // }
    // const ChangeUserpw = e => {
    //     const {value} = {...e.target}
    //     setUserpw(value)
    // }
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     console.log(userid,userpw)
    // }
const Login =  () => {
    const dispatch = useDispatch()
    const {loadding,IsLogin} = useSelector((state)=>state.user)
    console.log(loadding)
    const userid = useInput('')
    const userpw = useInput('')
    

    const handleSubmit =  e => {
        e.preventDefault()
        const data = {
            userid:userid.value,
            userpw:userpw.value
        }

        dispatch(UserLoginAction(data))

    }

    useEffect(()=>{ //값이 바뀌였을때마다 실행한다.
        IsLogin === true && Router.push('/')
    },[loadding])
  
    return(
        <>
         <Head>
            <title>blog | 로그인</title>
        </Head>
        <FormLayout>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" {...userid} placeholder="아이디 입력" />
            {/* {...userid} 가능하게 해준거는 babel이며 구현해준거다. */}
            <input type="password" {...userpw} placeholder="비밀번호 입력" />
           {loadding ?'로딩중' : <button type="submit">로그인</button> }
        </form>
        </FormLayout>
            
        </>
    )
}

export default Login