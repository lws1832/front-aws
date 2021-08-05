import FormLayout from "../components/FormLayout"
import Head from 'next/head'
import useInput from "../hooks/useinput"
import { useState } from "react"
/*
        아이디
        이름
        패스워드
        패스워드확인
        전화번호
*/
const Join = ()=>{
    const userid = useInput('')
    const username = useInput('')
    const password = useInput('')
    const userphone = useInput('')
    
    const [passwordCheck,setPasswordCheck] = useState('')
    const [passwordError,setPasswordError] = useState(false)

    const handlePassword = e=>{
        const {value}={...e.target}
        setPasswordError(password.value !== value)
        setPasswordCheck(value)
    }

    const [term,setTerm] = useState(false)
    const [termError,setTermError] = useState(false)

    const handleTerm = e=>{
        setTermError(e.target.checked !== true)
        setTerm(e.target.checked)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()

        if(password.value !== passwordCheck){
            setPasswordError(true)
            return;
        } else{
            setPasswordError(false)
        }
        if(!term){
            setTermError(true)
            return;
        } 
        console.log({
            userid:userid.value,
            username:username.value,
            userpw:password.value,
            userphone:userphone.value
        })
       
    }
    return(
        <>
         <Head>
            <title>blog | 회원가입</title>
        </Head>
        <FormLayout>
       <h2>회원가입</h2>
       <form onSubmit={handleSubmit}>
           <input type="text" {...userid} placeholder="아이디"/> <br/>
           <input type="text" {...username} placeholder="이름"/> <br/>
           <input type="password" {...password} placeholder="비밀번호"/> <br/>
           <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="비밀번호 재확인"/> <br/>
          
           { passwordError && <div style={{color:'red',fontWeight:'bold'}}>비밀번호가 일치하지 않는다.</div>}
            
           <input type="text" {...userphone} placeholder="전화번호"/> <br/>
           <input type="checkbox" checked={term} id="term" onChange={handleTerm}/> 
           <label htmlFor="term">약관 동의</label> 
           {termError && <div style={{color:'blue',fontWeight:'bold'}}>약관 동의 눌러</div>}
           <img alt="시각장애인을 위한 이미지를 설명해주는 영역" />
           <br/>
           <button type="submit">가입하기</button>
       </form>

        </FormLayout>
            
        </>
    )
}

export default Join