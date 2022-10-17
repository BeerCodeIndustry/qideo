import { ModalProps } from '@beercode/common-frontend'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CommonType {
  modal: Omit<ModalProps, 'onClose'> | null
}

const initialState: CommonType = {
  modal: null,
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
  },
})

export const { addModal, closeModal } = commonReducer.actions

export default commonReducer.reducer
