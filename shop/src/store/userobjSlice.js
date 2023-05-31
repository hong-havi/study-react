import { createSlice } from '@reduxjs/toolkit'

let user_obj = createSlice({
    name : 'user',
    initialState : { name: 'kim', age : 20 },
    reducers : {
        obj_changeName( state ){
            state.name  = 'park'
        },
        obj_upAge(state, action){
            //payload 필수 action 안에는 해당 object 의 상태를 가지고 있음
            state.age += action.payload
        }
    }
})

export let { obj_changeName, obj_upAge }  = user_obj.actions  //디스처럭 문법

export default user_obj
