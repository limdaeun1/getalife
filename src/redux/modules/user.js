import axios from "axios";



//actions
const LOGIN = "user/LOGIN";    //user 파일의 LOGIN?
const LOGOUT = "user/LOGOUT";


//initalstate
const initialState = {
  user: { nickname: null, name: null },
  is_login: false,    // 로그인하면 is_login 상태가 true가 됨 -> 페이지에서 로그인상태여야 보이는것들 구현할때 사용
};


//actions creators
export function logInUser(user) {     
  return { type: LOGIN, user:user };    //각각 action.type   / action.user (userid,nickname)  /return안에 들어있는게 action 그자체
} 

export function logOutUser(user) {
  return { type: LOGOUT, user };
}


// middlewares ------------------------------------------------------------------------------------------------------------------------------------------------------------
const url = "http://13.125.102.125:8080";

//회원가입
export const signupDB = ( logid ,nickname, password , password2) => {
  return async function (dispatch, getState) {
    
    await axios
      .post(url + "/api/member/signup", {
        nickname: logid,
        name: nickname,
        password: password,
        passwordConfirm: password2    
      })
      
      .then((response) => {
        console.log(response)
        if(response.data.success == true) 
        { window.alert("회원가입이 완료되었습니다.")
          window.location.assign("/login");
        }
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

//로그인
export const loginDB = (logid, password) => {
  return async function (dispatch) {    
    await axios
    
      .post(url + "/api/member/login", {
        nickname: logid,
        password: password,
      },)
      .then((response) => {
        if(response.data.success == true) {
        localStorage.setItem("token", response.headers['authorization']);
        localStorage.setItem("refresh-token", response.headers['refresh-token']);     //첫번째 인자:key값 , 두번째 인자:value값
        localStorage.setItem("nickname", logid);
        localStorage.setItem("name", response.data.data.name)
        dispatch(
          logInUser({                      //state에 user와 is_login 을 넣어주는 함수
            nickname: logid,                         
            name: response.data.data.name,
            })
        )
        window.alert(`${response.data.data.name}님 환영합니다!`)
        
        window.location.assign("/")
          }
          
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

//로그인상태 확인
//모든 행동을 할때마다 현재 아이디를 localStorage에서 계속 꺼내줌   
//새로고침대비 app.js에서 항상 localstorage에 user정보가 있다면 state에 넣어주고 is_login상태를 true로 만든다
export const loginCheck = () => {
  return function (dispatch) {
    const nickname = localStorage.getItem("nickname");
    const name = localStorage.getItem("name");
    if (nickname) {
      dispatch(logInUser({ nickname, name }));
    }

  };
};

//로그아웃
export const logoutDB = () => {
  return function (dispatch) {
    localStorage.clear();
    dispatch(logOutUser());
    window.location.assign("/")
   };
};


//닉네임 변경
export const changeName = (name) => { 
  return async function (dispatch, getState) {
   await axios
      .post(url + "/api/auth/member/name" , name ,  {
        headers: {
          "content-Type": "application/json",
         authorization: localStorage.getItem("token"),
         'refresh-token': localStorage.getItem("refresh-token"),
        },
      })
      .then((response) => {
        if(response.data.success == true) 
        {window.location.assign("/mypage")
      }
        else{
        const errormessage = response.data.error.message
        window.alert(`${errormessage}`);        
        window.location.assign("/")
      }})
      .catch((error) => {
        console.log(error);
        window.alert("수정이 실패하였습니다."); 
        });
  };
};


//------------------------------------------------------------------------------------------------------------------------------------------------------------

//reducer
export default function reducer(state = initialState, action = {}) {
  
  switch (action.type) {
     
    case LOGIN:
      state.user = {...action.user} ;    //state.user = {userid:.. , nickname:..}
      state.is_login = true;
      return state;

    case LOGOUT:
      state.user = {};
      state.is_login = false;
      return state;  
   
        
      default:
        return state;
        
 }
  
}

