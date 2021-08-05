import {useRouter} from 'next/router'
import BlogLayout from '../../components/BlogLayout'
import Head from 'next/head'

const data = [
    {
        id:"1",
        subject:"TOP blog",
        content:"블로그는 몸에 해롭습니다.",
        date:"2021-07-28",
        hit:"0"
    },
    {
        id:"2",
        subject:"OP blog",
        content:"블로그 보고 따라했다가 안된적이 몇번 있습니다.",
        date:"2021-07-28",
        hit:"0"
    }
]

const Post = ()=>{
    const router = useRouter()
    const {post} = router.query  //카테고리 이름
    // 카테고리 번호 db idx id
    // server 요청해서 id 관련된 게시물들을 가져오로 수 있도록
    /*
        게시번호
        제목
        날짜
        조회수
    */

       
    const list = data.map(v=>{
        return(
            <div key={v.id}>
                <ul>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                </ul>
            </div>
        )
    })
    return(
        <>
         <Head>
            <title>blog | 리스트</title>
        </Head>
        <BlogLayout>
        {post} 리스트
        <div>
            {list}
        </div>
        </BlogLayout>
            
        </>
    )
}

export default Post