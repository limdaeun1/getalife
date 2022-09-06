import React from "react";
import Router from "./shared/Router";
import { useEffect } from "react";
import { loginCheck } from "./redux/modules/user"
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
 

  useEffect(() => {         //로그인체크 함수
    dispatch(loginCheck());
  }, [dispatch]);
  
  return (
  
     <Router>
      </Router>
    
    )}

export default App;