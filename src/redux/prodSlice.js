import { createSlice } from '@reduxjs/toolkit'

export const prodSlice = createSlice({
    name: 'product',
    initialState: {
        selectedCategory: "ALL"
    }, 
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.product.selectedCategory;
export const { filterCategory } = prodSlice.actions;
export default prodSlice.reducer;