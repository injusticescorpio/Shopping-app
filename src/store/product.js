import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
const initialState ={
    data:[],
    error:null,
    loading: true,
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        // fetchProducts:(state,action) =>{
        //     state.data=action.payload
        // }
    },
        extraReducers: (builder) => {
            builder
              .addCase(getProducts.pending, (state) => {
                state.error = null;
                state.loading = true;
              })
              .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
              })
              .addCase(getProducts.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message;
              });
          },
})


export default productSlice.reducer;

// export function getProducts(){
//     return async function getProductThunk(dispatch,getState) {
//         const data=await fetch('https://fakestoreapi.com/products')
//         const result=await data.json()
//         console.log(result)
//         dispatch(fetchProducts(result))

//     }
// }

export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result=await response.json();
    return await result
  });

