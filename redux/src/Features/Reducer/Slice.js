import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { 
    todo:[{id:1,text:"hello world"}]
 }

 export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    textAdd:(state,action)=>{
        const Val = {   
            id:nanoid(),
            text:action.payload
        }
        state.todo.push(Val)
    },


    removeText:(state,action)=>{

 state.todo = state.todo.filter((todo)=>todo.id!==action.payload)
    }
  }
})

export const {  textAdd,  removeText} = counterSlice.actions
export default counterSlice.reducer