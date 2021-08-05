import Link from 'next/link'
import NavToggle from '../NavToggle'
import Styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeaderContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 5vw;
    box-sizing:border-box;
    border-bottom:1px solid #ddd;
    width:100vw;
    height:10vh;
`

const Gnb = Styled.ul`
    //모바일
    display:flex;
    flex-direction:row;
    //& 자신을 뜻한다 지금 여기서는 ul을 가르킨다
    & > li{
        margin-left:20px;
    }

    //미디어쿼리 pc내용들

    @media only screen and (max-width:768px){
        display:none;
    }
`
const LoginComponent = ()=>{
    return(
        <>
             <li><Link href="/login"><a>로그인</a></Link></li>
            <li><Link href="/join"><a>회원가입</a></Link></li>
        </>
    )
}
const LogoutComponent = ()=>{
    return(
        <>
            <li><Link href="/logout"><a>로그아웃</a></Link></li>
            <li><Link href="/join"><a>회원가입</a></Link></li>
        </>
    )
}

const Header = ()=>{
   
    const {IsLogin} = useSelector((state)=>state.user )
   
    
    return(
        <>
    <HeaderContainer>
                <h1>로고</h1>
                <Gnb>
                    <li>
                        <Link href="/">
                        <a>메뉴</a>
                        </Link>
                        </li>
                    <li>
                    <Link href="/posts/post">
                        <a>글쓰기</a>
                        </Link>
                    </li>
                    {
                        IsLogin===false
                        ?<LoginComponent />
                        :<LogoutComponent />
                    }
                   
                </Gnb>
                <NavToggle/>
            </HeaderContainer>
        </>
    )
}

export default Header
