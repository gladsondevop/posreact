import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  miniaturas: [],
  miniatura: {}
}

export const counterSlice = createSlice({
  name: 'miniatura',
  initialState,
  reducers: {
    setMiniaturas: (state, action) => {
      state.miniaturas = action.payload
    },
    setMiniatura: (state, action) => {
      state.miniatura = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMiniaturas, setMiniatura } = counterSlice.actions

export default counterSlice.reducer