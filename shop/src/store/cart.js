import { createSlice } from '@reduxjs/toolkit'


let cart = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        changeCount( state, action ){
            let target = state.find( ( data ) => { return data.id === action.payload.id })
            switch( action.payload.action ){
                case 'increase' :
                    target.count += 1
                    break;
                case 'decrease' :
                    if( target.count > 0 ) target.count -= 1
                    break;
                default : break;
            }
        },
        increaseCount(state, action){
            let target = state.find( ( data ) => { return data.id === action.payload })
            target.count += 1
        },
        decreaseCount(state, action){
            let target = state.find( ( data ) => { return data.id === action.payload })
            target.count -= 1
        },

        addCart( state, action ){
            state.push({
                id : 123,
                name : action.payload.title,
                count : 1
            })
        }
    }
})

export let { changeCount,addCart }  = cart.actions 


export default cart