import { configureStore, createSlice, current } from '@reduxjs/toolkit'



let user = createSlice({

    name: 'card',
    initialState: [{
        id: '375c619f-89bf-43db-915f-0a0a0449325f', // id는 모두 고유값이어야 합니다.
        title: "리액트 강의보기",
        body: "챕터 1부터 챕터 12까지 학습",
        isDone: false
    },
    {
        id: '97c2e2f4-276a-4cc5-a0d9-2fd48468781f', // id는 모두 고유값이어야 합니다.
        title: "신나게놀기",
        body: "1월 1일부터 12월 31일까지 놀기",
        isDone: false
    }, {
        id: '75066d69-b360-41d0-8b42-6715d147bc81',
        // id는 모두 고유값이어야 합니다.
        title: "과제 완성하기",
        body: "목요일 이전까지 lv3완료하기",
        isDone: false
    }],


    reducers: {
        changeIsDone(state, action) {
            const foundTodo = state.find((x) => {
                return x.id === action.payload
            })
            foundTodo.isDone = !foundTodo.isDone

        },
        deleteCardBox(state, action) {


        },
        addCardBox(state, action) {


            state.unshift(action.payload)
            // console.log(current(state))
        }
    }
})

export let { changeIsDone, deleteCardBox, addCardBox } = user.actions


export default configureStore({
    reducer: {
        user: user.reducer,

    }
}) 