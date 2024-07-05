import { configureStore } from '@reduxjs/toolkit'
import nodeReducer from './nodeReducer'

export default configureStore({
  reducer: {
    app: nodeReducer
  },
})