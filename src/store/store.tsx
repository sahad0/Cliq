
import { createSlice } from "@reduxjs/toolkit";


const val = {
       token:"",
}


const storeSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        loginController: (state, action) => {
             
            const {token} = action.payload;
            state.value = {...state.value,token};

          


        },
        logoutController : (state) => {
            const temp = {token:""};
            state.value = temp;

        }
    }
})

export const { loginController ,logoutController} = storeSlice.actions;

export default storeSlice.reducer;