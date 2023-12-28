import {createSlice} from "@reduxjs/toolkit";
import {add, getAll, getById, removeById, update} from "../services/productService.jsx";
const initialState = {
    list :[],
    newProduct : {
        name: "",
        description: "",
        price: ''
    }
}

const productSlice = createSlice ( {
    name : 'products',
    initialState,
    extraReducers : builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            state.list.push(payload);
        })
        builder.addCase(getById.fulfilled, (state,{payload}) => {
            state.newProduct = (payload);
        })
        builder.addCase(removeById.fulfilled, (state,{payload}) => {
            state.list.splice(payload)
        })
        builder.addCase(update.fulfilled, (state,{payload}) => {
            const index = state.list.findIndex(product => product.id === payload.id);
            state.list[index] = payload;
        })
    }

})

export default productSlice.reducer;