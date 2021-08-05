# blog 폴더 생성
    back 폴더 생성
    front 폴더 생성

# 작업할 디렉토리까지 접근해야됨

# npm init node.js 환경 만들어주기

# npm i next react react-dom

package.json 안에 넣기
  "dev" : "next dev -p 3001 -H 0.0.0.0",
    "build" : "next build",
    "start" : "next start",
    "lint" : "next lint"


    192.168.0.22:3001 

# pages 폴더
index.jsx 메인페이지
join.jsx 회원가입
login.jsx 로그인페이지
/posts/post.jsx 글쓰기


# 동적 라우팅 사용방법

1. 파일명을 배열형식으로 만든다 [post].jsx

# 레이아웃 구성하기
components 폴더생성
안에 BlogLayout.jsx 파일 생성
컴포넌트 까지 생성코드작성하기
미리미리 만들어 놓아야한다.

# 또다른 레이아웃구성하기
components 폴ㄷ안에서 formLayout.jsx 생성한뒤
login.jsx / join.jsx 에 사용하기

# Link 컴포넌트 사용하기
 react에 사용되는 Link와 사용법이 다름
 
 ### import Link from 'next/link'

 ex) react -> <Link to="/">메뉴</Link>
     next -> <Link href="/"><a>메뉴</a></Link>

# index.html 어디갔어?!

# next 모든 컴포넌트를 실행하기전에 거쳐가는 컴포넌트가 있다
# app.jsx 어디갓? head 모든곳에 공통적으로 사용이 가능하다
# 혹은 공통적인 css가 있다면 여기다가 


# Styled Components 환경설정
# _document.jsx 만들기
# .babelrc

# npm i -D babel-plugin-styled-components

# npm i next-redux-wrapper //store next ssr redux 를 next 에 맞게 설정
# npm i redux //store middlerare combine
# npm i react-redux //redux랑 같이 쓸때 컴포넌트에서 저장소에 있는 내용을 가져올때
# npm i redux-devtools-extension //devtools 설치를 해야지만 가능하다.

1. store/configureStore.js
  -> coontext.jsx 같은의미
  -> coontext.jsx 는 초기상태값을 저장한 컴포넌트를 만드는 파일이다.

combine



