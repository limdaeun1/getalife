import React from "react";
import Router from "./shared/Router";
import { useEffect } from "react";
import { loginCheck } from "./redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
 

  // useEffect(() => {
  //   dispatch(loginCheck());
  // }, [dispatch]);
  
  return (
  
     <Router>
      </Router>
    
    )}

export default App;