const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send('안녕해쇼')
})
app.post('/api/login',(req,res)=>{
    const {userid,userpw} = req.body
    let result = {}
    console.log(userid)
    console.log(userpw)
    //DB에서 조회하는게 맞다
    // 예시)
    
    if(userid == 'asd' && userpw == 'asd'){
        result = {
            result:'ok',
            msg:'로그인성공'
        }
    }else{
        result ={
            result:'faul',
            msg:'실패'
        }

    }
    

    res.json(result)
})

app.listen(3000,()=>{
    console.log('3000세계')
})