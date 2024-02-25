//collection of logic is called slice in redux-toolkit
//createSlice takes a object
//name,initialState,reducers(function-logical operation)
//we dont need action in toolkit,reducers are being used as action property in redux-toolkit.

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
  name:"counter",
  initialState:{count:0},
  reducers:{
    increment:(state)=>{
      state.count=state.count+1
    },
    decrement:state=>{
      state.count=state.count-1
    },
    reset:state=>{
      state.count=0
    }

  }

})
export default counterSlice.reducer;
export const {increment,decrement,reset}=counterSlice.actions;






