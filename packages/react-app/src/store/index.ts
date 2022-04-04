import {configureStore} from '@reduxjs/toolkit'
import detailSlice from "./details-slice";
import {createBrowserHistory} from "history";


export const history = createBrowserHistory();


export const store = configureStore({
    reducer: {
        detail: detailSlice.reducer,
        //router: connectRouter(history)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
