import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchUserById=createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (thunkAPI) => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users').then(respone=>respone.json())
//         return response}
// )




// const initialState={
//     'entities':[]
// }

// export const counterSlice=createSlice({
//     'name':'counter',
//     initialState,
//     reducers:{
//         increment:(state)=>{
//             state.value +=1
            
//         },
//         decrement:(state)=>{
//             state.value-=1
//         }

//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchUserById.fulfilled, (state, action) => {
//             state.entities.push(action.payload)
//     })}
// })

// export const{increment,decrement}=counterSlice.actions

// export default counterSlice.reducer



const initialState = {
    entities: [],
    loading: false,
  }
  
  export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (data) => data.json()
    )
    return res
  })


  export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    // extraReducers: {
    //   [getPosts.pending]: (state) => {
    //     state.loading = true
    //   },
    //   [getPosts.fulfilled]: (state, { payload }) => {
    //     state.loading = false
    //     state.entities=payload
    //   },
    //   [getPosts.rejected]: (state) => {
    //     state.loading = false
    //   },
    // },
    extraReducers:(builder)=>{
        builder.addCase(getPosts.fulfilled,(state,action) => {
            state.entities=action.payload

        })
    }
  })
  
  export const postReducer = postSlice.reducer