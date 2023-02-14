import React, { useState } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'
import Detail from './pages/Detail'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeIsDone } from './store'
import { deleteCardBox } from './store'
import { addCardBox } from './store'
import { v4 as uuidv4 } from 'uuid';



const StBox = styled.div`
background-color: #EEEEEE;
height:100px;
border-radius: 20px;
display: flex;
align-items: center;
padding: 0 30px;
gap: 10px;
margin: 20px 20px 0;


`
const StInputBox = styled.input`
height: 40px;
border: none;
border-radius: 14px;
width: ${(props) => props.width};
padding-left: 10px;
`
const StP = styled.p`
margin-left: 10px;
font-size: 1rem;
font-weight: bold;
`
const StButton = styled.button`
height: 42px;
border-radius: 10px;
width: 150px;
border: none;
background-color: #008080;
color: white;
font-size: 1rem;
font-weight: bold;
margin-left: auto;
cursor: pointer;
`
const StInnerBox = styled.div`
margin: 40px 40px 0px;

`
const CardBox = styled.div`
width: 270px;
height: 170px;
border: 4px solid #008080;
border-radius: 10px;
padding: 20px 20px;



`
const CardButton = styled.button`
border: 1px solid ${(props) => props.bodercolor};
background-color: inherit;
width: 120px;
height: 40px;

border-radius: 10px;

cursor: pointer;
`
const CardContainer = styled.div`
display: inline-flex;
/* justify-content: left; */
/* align-content: center;s */
/* flex-direction: row; */
flex-wrap: wrap;
gap: 10px;
`
const CardWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 10px;
`
const StSpan = styled.span`
cursor: pointer;
`

function App() {


  let state = useSelector((state) => { return state });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <>
      <Routes>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        <Route path='/' element={<>
          <StBox>
            <StP>제목</StP><StInputBox value={title} onChange={(e) => {
              setTitle(e.target.value)
            }} width='200px'></StInputBox>
            <StP>내용</StP><StInputBox value={desc} onChange={(e) => {
              setDesc(e.target.value)
            }} width='200px'></StInputBox>
            <StButton onClick={() => {

              if (!title || !desc) {
                alert('공백발생')
              } else {
                dispatch(addCardBox({
                  id: uuidv4(),
                  title: title,
                  body: desc,
                  isDone: false
                }))
                setDesc('');
                setTitle('');
              }
            }
            }
            >안녕하쇼</StButton>
          </StBox>
          <StInnerBox>

            <h2>Working..🏋🏿‍♂️</h2>
            <CardContainer>
              {state.user.filter((item) => {
                return (item.isDone === false)
              }).map((item) => {
                return <CardBox key={item.id}>
                  <StSpan onClick={() => {
                    navigate(`/detail/${item.id}`)
                    setTitle('')
                    setDesc('')
                  }}>상세보기</StSpan>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <CardWrap>
                    <CardButton onClick={() => {
                      dispatch(deleteCardBox(item.id))
                    }} bodercolor='red'>삭제하기</CardButton>
                    <CardButton bodercolor='green' onClick={() => {

                      dispatch(changeIsDone(item.id))
                    }}>{item.isDone === false ? '완료하기' : '취소하기'}</CardButton>
                  </CardWrap>
                </CardBox>
              })}
            </CardContainer>

            <h2>Done..!🛀🏿</h2>
            <CardContainer>
              {state.user.filter((item) => {
                return (item.isDone === true)
              }).map((item) => {
                return <CardBox key={item.id}>
                  <StSpan onClick={() => {
                    navigate(`/detail/${item.id}`)
                    setTitle('')
                    setDesc('')
                  }}>상세보기</StSpan>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <CardWrap>
                    <CardButton bodercolor='red' onClick={() => {
                      dispatch(deleteCardBox(item.id))
                    }}>삭제하기</CardButton>
                    <CardButton bodercolor='green' onClick={() => {
                      dispatch(changeIsDone(item.id))
                    }}>{item.isDone === false ? '완료하기' : '취소하기'}</CardButton>
                  </CardWrap>
                </CardBox>
              })}


            </CardContainer>
          </StInnerBox>
        </>}></Route>
      </Routes>
    </>
  )
}

export default App