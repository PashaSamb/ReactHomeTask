import { configureStore } from "@reduxjs/toolkit";
import  {forecastItemReducer}  from "./forecastItemSlice";

const store = configureStore ({
    reducer: {
        forecastItemStore: forecastItemReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export default store;