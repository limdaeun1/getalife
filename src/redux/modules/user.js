import axios from "axios";
//actions
const LOGIN = "user/LOGIN";    //user 파일의 LOGIN?

//initalstate
const initialState = {
  user: { userid: null, nickname: null },
  is_login: false,    // 로그인하면 is_login 상태가 true가 됨 -> 페이지에서 로그인상태여야 보이는것들 구현할때 사용
};


//actions creators

export function logInUser(user) {     
  return { type: LOGIN, user:user };    //각각 action.type   / action.user (userid,nickname)  /return안에 들어있는게 action 그자체
} 

// middlewares 
const url = "url";

export const signupDB = ( logid ,nickname, password , password2) => {
  return async function (dispatch, getState) {
    
    await axios
      .post(url + "/api/member/signup", {
        userid: logid,
        nickname: nickname,
        password: password,
        passwordConfirm: password2    
      })
      
      .then((response) => {
        console.log(response)
        if(response.data.success == true) 
        { window.alert("회원가입이 완료되었습니다.")
          window.location.assign("/login");}
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        //서버안에 있는 error내용으로 실패했을때 서버에서 보내주는 error메세지 띄움 
      }
       })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("회원가입에 실패했습니다! 다시 시도해주세요");    //아예 네트워크 에러 status 다르게 들어오는경우 
        console.log(errorCode, errorMessage);
      });
  };
};

export const loginDB = (logid, password) => {
  return async function (dispatch) {    
    await axios
      .post(url + "/api/member/login", {
        userid: logid,
        password: password,
      })
      .then((response) => {
       if(response.data.success == true) {
        localStorage.setItem("token", response.data.token);     //첫번째 인자:key값 , 두번째 인자:value값
        localStorage.setItem("userid", logid);
        localStorage.setItem("nickname", response.data.nickname)
        dispatch(
          logInUser({
            userid: logid,
            nickname: response.data.nickname,
          })
        )
        window.alert(`${response.data.nickname}님 환영합니다!`)
        window.location.assign("/")}

        else {
          const errormessage = response.data.error.message
          window.alert(`${errormessage}`);
        }})
        
        
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("로그인에 실패했습니다! 다시 시도해주세요")
        console.log(errorCode, errorMessage)
      })
  }
}


//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      state.user = {...action.user} ;    //state.user = {userid:.. , nickname:..}
      state.is_login = true;
      return state;
      default:
        return state;
  }
}
