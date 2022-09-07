import React, { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CardList from "../components/card/CardList";
import CardRank from "../components/card/CardRank";
import { getPostListDB } from "../redux/modules/post";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";


const Main = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPostListDB());
  // }, [dispatch]);
  
  
  
  
  return (
    <>
      <Header />
      
     
      <CardRank />
      <CardList />
      

    </>
  );
};

export default Main;

