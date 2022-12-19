import {createSlice} from "@reduxjs/toolkit";

export const isMicPanelActiveSlice = createSlice({
    name:'isMicPanelActive',
    initialState:{value:false},
    reducers:{
        isMicPanelActiveDispatch: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {isMicPanelActiveDispatch} = isMicPanelActiveSlice.actions;

export default isMicPanelActiveSlice.reducer;
