import React from 'react'
import AddFile from '../components/AddFile';
import AddCard from '../components/card/AddCard';
import Header from '../components/Header';
import Layout from "../components/Layout";
import styled from 'styled-components';

const Write = () => {
  return (
    <>
    <Header/>
    <Layout>
       <UploadSection>
       <BorderSection>
          <AddFile/>
          <AddCard/>
        </BorderSection>
        </UploadSection >
    </Layout>
    </>
  )
}

export default Write

const UploadSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
  p {
    font-size: 24px;
    font-weight: bold;
  }
  textarea {
    width: 500px;
  }
`;

const BorderSection = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 7px 1px rgb(64 60 67 / 16%);
  margin-top: 20px;
  border-radius: 15px;
  padding-bottom: 10px;
`
