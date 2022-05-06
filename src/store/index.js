import { configureStore } from '@reduxjs/toolkit'

import numbersReducer from './get-numbers-slice'

const store = configureStore({
    reducer: numbersReducer
})


export default store