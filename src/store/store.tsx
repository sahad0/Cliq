
import { createSlice } from "@reduxjs/toolkit";

type StoreValue = {
    token: string,
    orgNewUser: boolean,
}
const val:StoreValue = {
       token:"",
       orgNewUser:false,
}


const storeSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        loginController: (state, action) => {
             
            const {token,orgNewUser} = action.payload;
            state.value = {...state.value,token,orgNewUser};
        },
        logoutController : (state) => {
            const temp = {token:"",orgNewUser:false};
            state.value = temp;

        }
    }
})

export const { loginController ,logoutController} = storeSlice.actions;

export default storeSlice.reducer;