import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Login from "../components/Login";

const Loginpage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default Loginpage;
