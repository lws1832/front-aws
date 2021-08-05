import '../index.css'

import Head from 'next/head'
import Store,{initalState} from '../store/context'
import { useContext, useReducer } from 'react'
import { reducer } from '../store/reducer'
import wrapper from '../store/configureStore'

const App = ({Component}) =>{
    const globalContext = useContext(Store)
    const [state,dispatch] = useReducer(reducer,globalContext)

    return(
        <>
        
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap" rel="stylesheet"/>
        </Head>
        <Store.Provider value={{state,dispatch}}>
            <Component />
            {/* 우리가 만든 파일들이 여기에 위치한다
                로그인 페이지 / 회원가입페이등등
            */}
        </Store.Provider>
        </>
    )
}

export default wrapper.withRedux(App)