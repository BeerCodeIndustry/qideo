import { configureStore } from '@reduxjs/toolkit'

import common from './reducers/common.reducer'

export const store = configureStore({
  reducer: {
    common,
  },
})

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
