
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreValue extends UserType {
    token: string,
}
type UserType = {
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
        loginController: (state, action:PayloadAction<StoreValue>) => {
             
            const {token,orgNewUser} = action.payload;
            state.value = {...state.value,token,orgNewUser};
        },
        logoutController : (state) => {
            const temp = {token:"",orgNewUser:false};
            state.value = temp;

        },
        userTypeController : (state,action:PayloadAction<UserType>) => {
            const {orgNewUser} = action.payload;
            state.value = {...state.value,orgNewUser};
        }
    }
})

export const { loginController ,logoutController ,userTypeController} = storeSlice.actions;

export default storeSlice.reducer;