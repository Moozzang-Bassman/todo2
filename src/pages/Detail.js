import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  `
const DetailBox = styled.div`

  border: 1px solid gray;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  
padding: 20px;
  `
const DetailButton = styled.button`
    float: right;
    background-color: inherit;
    border: 1px solid gray;
    width: 80px;
    height: 30px;
    border-radius: 10px;

    cursor: pointer;
    
    `

function Detail() {

    // let a = useSelector((state) => state.user);

    const navigate = useNavigate();

    // const matchItem = item.find((x) => {
    //     return x.id === +id;
    // })


    return (

        < DetailContainer >
            <DetailBox>
                ID:0 <DetailButton onClick={() => {
                    navigate('/');
                }}>이전으로</DetailButton>
                <h2>리액트</h2>
                <p>리액트를 배워봅시다</p>
            </DetailBox>
        </DetailContainer >
    )
}

export default Detail;