import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName( state ){
            //return 'john kim' + state
            return 'john kim'
        },
        func(){

        }
    }
})

export let { changeName, func }  = user.actions  //디스처럭 문

export default user
