import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface StateType {
  value: number
}

const initialState: StateType = {
  value: 0,
}

export const commonReducer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    test: (state: StateType, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { test } = commonReducer.actions

export default commonReducer.reducer
