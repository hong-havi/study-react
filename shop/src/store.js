import { configureStore } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import user_obj from './store/userobjSlice.js'
import cart from './store/cart.js'

export default configureStore({
    reducer: {
        user : user.reducer,
        user_obj : user_obj.reducer,
        cart : cart.reducer
    }
})