import React from 'react'
import styled from 'styled-components'

const AddFile = () => {
  return (
    <ImgSection>
          <img
            src={
              "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
            }
            alt="업로드할 이미지"
          />
         
          <input
            id="file-input"
            type="file"
            accept="img/*"
            multiple="multiple"
          />
          
    </ImgSection>
  )
}

export default AddFile

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor:pointer;
  }
  img {
    width: 500px;
    height: 400px;
    margin-bottom: 30px;
    border-radius: 16px;
    margin-top: 60px;
  }
  button {
    width: 100px;
    height: 36px;
    margin-bottom: 20px;
    font-size: 14px;
    background-color:#000000;
    border: none;
    border-radius: 7px;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
    background-color: #666666;
  }
  }
`;