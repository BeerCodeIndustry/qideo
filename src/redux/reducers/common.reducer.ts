import { ModalProps } from '@beercode/common-frontend'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ThemeType } from '../../types/theme'

export interface CommonType {
  modal: Omit<ModalProps, 'onClose'> | null
  theme: ThemeType
}

const initialState: CommonType = {
  modal: null,
  theme: ThemeType.LIGHT,
}

export const commonReducer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    addModal: (
      state: CommonType,
      action: PayloadAction<CommonType['modal']>,
    ) => {
      state.modal = action.payload
    },
    closeModal: (state: CommonType) => {
      state.modal = null
    },
    toggleTheme: (state: CommonType) => {
      state.theme =
        state.theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT
    },
  },
})

export const { addModal, closeModal, toggleTheme } = commonReducer.actions

export default commonReducer.reducer
