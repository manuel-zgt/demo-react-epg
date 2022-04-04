import {DetailModel} from "../models/data-models";

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialDetailState: any = {
    selectedDetail: {
        "id": 0,
        "title": ""
    }
}

const detailSlice = createSlice({
    name: 'detail',
    initialState: initialDetailState,
    reducers: {
        setCurrentDetail(state, action: PayloadAction<DetailModel>) {
            state.selectedDetail = action.payload;
        }
    }
})
export default detailSlice;
