const initialState = {
    IsLogin:false,
    loadding:false,
}


const USER_LOGIN_SUCCESS = "UserLogin_SUCCESS"
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR"

// const USER_LOGIN = "USER_LOGIN"
const USER_LOGOUT = "USER_LOGOUT"


export const UserLoginAction = data => {
    return async (dispatch)=>{
       dispatch(UserLogin_REQUEST())
       try{
           console.log(data)
       const response = await fetch('http://localhost:3000/api/login',{
           method:'POST',
           headers:{
               "Content-type":"application/json",
           },
           body:JSON.stringify({...data}) //객체로 넣으면 절대 안되고 스트링으로 만들어야한다.
       })  //promise
       const result = await response.json()

       result.result === 'ok'
       ? dispatch(UserLogin_SUCCESS(result))
       :dispatch(UserLogin_ERROR())
        
       }catch(e){ //실패
        dispatch(UserLogin_ERROR())
       }
    }
}

export const UserLogoutAction = () => {
    return{
        type:USER_LOGOUT
    }
}

export const UserLogin_REQUEST = data => {
    return{
        type:USER_LOGIN_REQUEST,
        
    }
    
}
export const UserLogin_SUCCESS = () => {
    return{
        type: USER_LOGIN_SUCCESS,
      
    }
}
export const UserLogin_ERROR = () => {
    return{
        type:USER_LOGIN_ERROR,
       
    }
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loadding:true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                    IsLogin:true,
                    loadding:false,
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
                loadding:false,
            }
        case USER_LOGOUT:
            return {
               ...state,
                    IsLogin:false,
            }
        default:
            return state
    }
}

export default reducer