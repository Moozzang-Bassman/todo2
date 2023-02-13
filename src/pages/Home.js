import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsDone } from '../store'



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


function Home() {

    let a = useSelector((state) => { return state });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(a.user)
    return (
        <>

            <StBox>
                <StP>제목</StP><StInputBox width='200px'></StInputBox>
                <StP>내용</StP><StInputBox width='200px'></StInputBox>
                <StButton>안녕하쇼</StButton>
            </StBox>
            <StInnerBox>

                <h2>Working..🏋🏿‍♂️</h2>
                <CardContainer>
                    {a.user.filter((item) => {
                        return (item.isDone === false)
                    }).map((item) => {
                        return <CardBox>
                            <StSpan onClick={() => {
                                navigate('/detail')
                            }}>상세보기</StSpan>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <CardWrap>
                                <CardButton bodercolor='red'>삭제하기</CardButton>
                                <CardButton bodercolor='green' onClick={() => {

                                    dispatch(changeIsDone(item.id))
                                }}>{item.isDone === false ? '완료하기' : '취소하기'}</CardButton>
                            </CardWrap>
                        </CardBox>
                    })}

                    {/* {a.user.isDone === false ? <CardBox>
                        <StSpan onClick={() => {
                            navigate('/detail')
                        }}>상세보기</StSpan>
                        <h2>{a.user.title}</h2>
                        <p>{a.user.body}</p>
                        <CardWrap>
                            <CardButton bodercolor='red'>삭제하기</CardButton>
                            <CardButton bodercolor='green' onClick={() => {
                                dispatch(changeIsDone())
                            }}>{a.user.isDone === false ? '완료하기' : '취소하기'}</CardButton>
                        </CardWrap>
                    </CardBox>
                        : null} */}

                    {/* <CardBox>
                        <StSpan onClick={() => {
                            navigate('/detail')
                        }}>상세보기</StSpan>
                        <h2>{a.user.title}</h2>
                        <p>{a.user.body}</p>
                        <CardWrap>
                            <CardButton bodercolor='red'>삭제하기</CardButton>
                            <CardButton bodercolor='green' onClick={() => {
                                dispatch(changeIsDone())
                            }}>{a.user.isDone === false ? '완료하기' : '취소하기'}</CardButton>
                        </CardWrap>
                    </CardBox> */}



                </CardContainer>

                <h2>Done..!🛀🏿</h2>
                <CardContainer>
                    {a.user.filter((item) => {
                        return (item.isDone === true)
                    }).map((item) => {
                        return <CardBox>
                            <StSpan onClick={() => {
                                navigate('/detail')
                            }}>상세보기</StSpan>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <CardWrap>
                                <CardButton bodercolor='red'>삭제하기</CardButton>
                                <CardButton bodercolor='green' onClick={() => {

                                    dispatch(changeIsDone(item.id))
                                }}>{item.isDone === false ? '완료하기' : '취소하기'}</CardButton>
                            </CardWrap>
                        </CardBox>
                    })}


                </CardContainer>
            </StInnerBox></>
    )
}

export default Home