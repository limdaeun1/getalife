import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const User = () => {
  const [user, setUser] = useState({
    title: "",
  });

  // axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/users");
    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  console.log(todos); // App.js:16
  return <div>App</div>;
};

export default User;

// // Actions
// const LOGIN = "user/LOGIN";
// const LOGOUT = "user/LOGOUT";

// const initialState = {
//   user: { user: null, nickName: null },
//   is_login: false,
// };

// // Action Creators
// export function logInUser(user) {
//   return { type: LOGIN, user };
// }
// export function logOutUser(user) {
//   return { type: LOGOUT, user };
// }

// // middlewares
// const url = "http://3.34.45.167";
// // "http://3.34.200.72";

// export const signupDB = (email, nickname, password) => {
//   return async function (dispatch, getState) {
//     await axios
//       .post(url + "/users/signup", {
//         userId: email,
//         nickName: nickname,
//         password: password,
//       })
//       .then((user) => {
//         window.alert("회원가입이 완료되었습니다.");
//         window.location.assign("/login");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         window.alert("회원가입에 실패했습니다! 다시 시도해주세요");
//         console.log(errorCode, errorMessage);
//       });
//   };
// };

// export const loginDB = (email, password) => {
//   return async function (dispatch) {
//     await axios
//       .post(url + "/users/auth", {
//         userId: email,
//         password: password,
//       })
//       .then((user) => {
//         localStorage.setItem("token", user.data.token);
//         localStorage.setItem("userId", email);
//         localStorage.setItem("nickName", user.data.nickName);
//         dispatch(
//           logInUser({
//             userId: email,
//             nickName: user.data.nickName,
//           })
//         );
//         window.alert(`${user.data.nickName}님 환영합니다!`);
//         window.location.assign("/");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         window.alert("로그인에 실패했습니다! 다시 시도해주세요");
//         console.log(errorCode, errorMessage);
//       });
//   };
// };

// export const loginCheck = () => {
//   return function (dispatch) {
//     const userId = localStorage.getItem("userId");
//     const nickName = localStorage.getItem("nickName");
//     if (userId) {
//       dispatch(logInUser({ userId, nickName }));
//     }

//     // const tokenCheck = document.cookie;
//     // if (tokenCheck) {
//     //   dispatch(logInUser({ userId: userId }));
//     // } else {
//     //   dispatch(logOutUser());
//     // }
//   };
// };

// export const logoutDB = () => {
//   return function (dispatch) {
//     localStorage.clear();
//     dispatch(logOutUser());
//     window.location.assign("/");
//   };
// };

// // Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case LOGIN:
//       state.user = { ...action.user };
//       state.is_login = true;
//       return state;
//     case LOGOUT:
//       state.user = {};
//       state.is_login = false;
//       return state;
//     default:
//       return state;
//   }
// }
