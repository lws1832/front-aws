import BlogLayout from "../components/BlogLayout"
import Head from 'next/head'


const Index = ()=>{
    return (
        <>
        <Head>
            <title>blog</title>
        </Head>
        <BlogLayout>
            
            <div>
                {/* 
                public
                ex)
                localhost:3001/app/100.jpg
                localhost:3001/1.jpg
                */}
                <img src="/프로게이머.jpg" />
            </div>
        </BlogLayout>
        </>
    )
}

export default Index