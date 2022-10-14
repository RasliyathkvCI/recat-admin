import { createSlice } from '@reduxjs/toolkit'
//Concept
//const [todoList,setTodolist]=useState([])
//setTodoList(action)

const initialState = {
    todoList: []

}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCompledStatus:(state,action)=>{
            state.todoList.map(raw =>{
                if(action.payload === raw.id){
                    raw.completed= true
                }
            })
        },
        setdeletedStatus:(state,action)=>{
             state.todoList.map(raw =>{
                if(action.payload === raw.id){
                    raw.deletedstatus = true
                }
             })
        }
    }
});

export const { saveTodo,setCompledStatus,setdeletedStatus} = todoSlice.actions

export const addedTodoList = state => state.todos.todoList

export default todoSlice.reducer