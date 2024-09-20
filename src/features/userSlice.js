import {createSlice,createAsyncThunk} from  '@reduxjs/toolkit'
import axios from 'axios'


// const fetchUsers=createAsyncThunk('users/fetchUser', async()=>{
//     const response= await axios.get("https://jsonplaceholder.typicode.com/users")
    
//     return response.data

// })
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

  const userSlice=createSlice({
    name:'users',
    initialState:{
        loading:false,
        users:[],
        error:''
    },
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending ,state=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=''


        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
        })
    }
  })

  
  export default userSlice.reducer