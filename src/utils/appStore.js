import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice'
import moviesReducer from '../utils/movieSlice'
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer:{
            user : userReducer,
            movies : moviesReducer,
            gpt: gptReducer,
           config: configReducer,
        },
    }
)

export default appStore;