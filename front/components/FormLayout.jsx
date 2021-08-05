import Router from 'next/router'
import Styled from 'styled-components'

const Background = Styled.div`
    width:100vw;
    height:100vh;
    background:#eee;
    display:flex;
    align-items:center;
    justify-content:center;

    & >div {
        width:300px;
        height:400px;
        background:#fff;
        padding:20px;
    }
`

const FormLayout = ({children}) =>{
    return(
        <>
        <Background>
            <div>
                <p onClick={()=>Router.back()}>뒤로가기</p>
                {children}
            </div>
        </Background>
        </>
    )
}

export default FormLayout