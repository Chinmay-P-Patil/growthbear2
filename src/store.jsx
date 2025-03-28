import { configureStore, createSlice } from "@reduxjs/toolkit";

const queryslice = createSlice({
    name: "query",
    initialState: {
        value: { query: "" },
        history: [],
    },
    reducers: {
        submit: (state, action) => {
            state.value = action.payload;
            state.history.push(action.payload);
        },
    },
})
export const { submit } = queryslice.actions;

export const store = configureStore({
    reducer: {
        query: queryslice.reducer,
    },
});