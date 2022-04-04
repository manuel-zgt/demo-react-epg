import detailSlice from './details-slice'
import {AnyAction} from '@reduxjs/toolkit'
import {ThunkAction} from '@reduxjs/toolkit'
import {RootState} from "./index";
import {DetailModel} from "../models/data-models";


export const detailsActions = detailSlice.actions

export const setSelectedDetails = (navigate: any, detail: any): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: DetailModel = {
            id: detail.id,
            title: detail.title
        };
        console.log(`dispatch:${JSON.stringify(response)}`);
        dispatch(detailsActions.setCurrentDetail(response));
        navigate('/details');
    }
}
