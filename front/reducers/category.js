const initialState = {
    menu:[
        {
            id: '1',
            category: '넘겨',
            url: '/posts/넘겨'
        },
        {
            id: '2',
            category: '살려',
            url: '/posts/살려'
        },
        {
            id: '3',
            category: '대분류메뉴3',
            url: '/posts/3'
        },
        {
            id: '4',
            category: '대분류메뉴4',
            url: '/posts/4'
        },
        {
            id: '5',
            category: '대분류메뉴5',
            url: '/posts/5'
        },
    ]
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default reducer