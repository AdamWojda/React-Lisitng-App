import { Reducer } from "react";
import { IAction, IState } from "./AppProviders.types";

export const initialState: IState = {
    Error: false,
    Loading: false,
    ReqData: { limit: 8 },
    Products: [],
    AllPages: 1,
    ActivePage: 1,
    Modal: false,
    currProduct: { name: '', id: 11, description: '', image: '' },
};

export const AppReducer: Reducer<IState, IAction> = (state, action) => {
    switch (action.type) {
        case 'setReqData':
            return {...state, ReqData: {...state.ReqData, ...action.payload}};
        case 'setState':
            return {...state, ...action.payload};
        default:
            throw new Error();
    }
};
